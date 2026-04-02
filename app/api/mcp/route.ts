import { readFileSync, existsSync, readdirSync } from "fs"
import { join } from "path"
import { createRemoteJWKSet, jwtVerify } from "jose"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { canReadDoc, getVisibleSlugs, type UserContext } from "@/lib/authorization"

const MD_DIR = join(process.cwd(), "public/md")

// Glow API JWKS for validating tokens (Glow API is the OIDC provider for docs)
const AUTH_ISSUER = process.env.AUTH_ISSUER || ""
const JWKS = AUTH_ISSUER
  ? createRemoteJWKSet(new URL(`${AUTH_ISSUER.replace(/\/$/, "")}/jwks`))
  : null

async function getUserContext(): Promise<UserContext> {
  try {
    const hdrs = await headers()
    const authHeader = hdrs.get('authorization')

    // Bearer token — validate against Glow API JWKS
    if (authHeader?.startsWith('Bearer ') && JWKS) {
      try {
        const token = authHeader.slice(7)
        await jwtVerify(token, JWKS)
        return { isAuthenticated: true }
      } catch {
        // Token invalid or expired — fall through
      }
    }

    // Browser sessions via Better Auth cookies
    const session = await auth.api.getSession({ headers: hdrs })
    return { isAuthenticated: !!session?.user }
  } catch {
    return { isAuthenticated: false }
  }
}

function getDocFiles(filterFn?: (path: string) => boolean): string[] {
  const files: string[] = []
  if (!existsSync(MD_DIR)) return files

  const walk = (dir: string, prefix: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        walk(join(dir, entry.name), `${prefix}${entry.name}/`)
      } else if (entry.name.endsWith('.md')) {
        const path = `${prefix}${entry.name}`
        if (!filterFn || filterFn(path)) files.push(path)
      }
    }
  }
  walk(MD_DIR, '')
  return files
}

// MCP tool implementations
const tools = {
  list_doc_sections: {
    description: "List all available documentation sections for the current user",
    parameters: {},
    execute: async (user: UserContext) => {
      const visibleSlugs = getVisibleSlugs(user)
      const files = getDocFiles((path) => {
        const slug = path.split('/')[0]
        return visibleSlugs.includes(slug) || visibleSlugs.includes('*')
      })
      return files.join('\n')
    },
  },

  fetch_doc: {
    description: "Fetch a documentation page as markdown",
    parameters: { path: "string" },
    execute: async (user: UserContext, params: { path: string }) => {
      const slug = params.path.split('/')[0]
      if (!canReadDoc(user, slug)) {
        return `Access denied: ${params.path}. Sign in for access.`
      }
      const filePath = join(MD_DIR, params.path)
      if (!existsSync(filePath)) return `Document not found: ${params.path}`
      return readFileSync(filePath, 'utf-8')
    },
  },

  search_docs: {
    description: "Search documentation for a keyword or phrase",
    parameters: { query: "string" },
    execute: async (user: UserContext, params: { query: string }) => {
      const visibleSlugs = getVisibleSlugs(user)
      const results: { path: string; snippet: string }[] = []
      const queryLower = params.query.toLowerCase()

      const files = getDocFiles((path) => {
        const slug = path.split('/')[0]
        return visibleSlugs.includes(slug) || visibleSlugs.includes('*')
      })

      for (const file of files) {
        const content = readFileSync(join(MD_DIR, file), 'utf-8')
        if (content.toLowerCase().includes(queryLower)) {
          const lines = content.split('\n')
          for (let i = 0; i < lines.length; i++) {
            if (lines[i].toLowerCase().includes(queryLower)) {
              const start = Math.max(0, i - 1)
              const end = Math.min(lines.length, i + 3)
              results.push({ path: file, snippet: lines.slice(start, end).join('\n') })
              break
            }
          }
        }
      }

      if (results.length === 0) return `No results found for: ${params.query}`
      return results.map(r => `### ${r.path}\n${r.snippet}`).join('\n\n')
    },
  },

  get_full_reference: {
    description: "Get the complete API + CLI reference in one response",
    parameters: {},
    execute: async (user: UserContext) => {
      if (!user.isAuthenticated) {
        return "Sign in required. The full reference is available to authenticated users."
      }
      const llmsPath = join(process.cwd(), "public/llms-full.txt")
      if (!existsSync(llmsPath)) return "Full reference not available"
      return readFileSync(llmsPath, 'utf-8')
    },
  },
}

// GET /api/mcp -- discovery endpoint (public)
export async function GET() {
  const user = await getUserContext()
  const baseUrl = process.env.BETTER_AUTH_URL || 'http://localhost:3300'

  return Response.json({
    name: "Glow Docs MCP",
    version: "1.0.0",
    authenticated: user.isAuthenticated,
    // OAuth 2.1 metadata for MCP clients
    authorization: {
      type: "oauth2",
      authorization_url: `${baseUrl}/api/auth/authorize`,
      token_url: `${baseUrl}/api/auth/token`,
      resource_metadata_url: `${baseUrl}/.well-known/oauth-protected-resource`,
    },
    tools: Object.entries(tools).map(([name, t]) => ({
      name,
      description: t.description,
    })),
  })
}

// POST /api/mcp -- tool execution
export async function POST(request: Request) {
  const user = await getUserContext()
  const body = await request.json()

  const { tool: toolName, params = {} } = body

  if (!toolName || !tools[toolName as keyof typeof tools]) {
    return Response.json({ error: `Unknown tool: ${toolName}` }, { status: 400 })
  }

  const tool = tools[toolName as keyof typeof tools]
  const result = await tool.execute(user, params)

  return Response.json({ result })
}
