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

// ── Helpers ─────────────────────────────────────────────────────

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function titleCase(text: string): string {
  return text.replace(/(^|[-_\s])(\w)/g, (_, sep, c) =>
    (sep === '-' || sep === '_' ? ' ' : sep) + c.toUpperCase()
  )
}

function escapeRegex(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function extractTitle(content: string): string {
  const m = content.match(/^#\s+`?([^`\n]+)`?/m)
  return m ? m[1].trim() : ''
}

function extractDescription(content: string): string {
  for (const line of content.split('\n')) {
    const t = line.trim()
    if (t && !t.startsWith('#') && !t.startsWith('*No') && !t.startsWith('---')) return t
  }
  return ''
}

/** Split markdown content by ## headings */
function splitByHeadings(content: string): { heading: string; content: string }[] {
  const sections: { heading: string; content: string }[] = []
  const lines = content.split('\n')
  let heading = ''
  let buf: string[] = []

  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (heading || buf.length) sections.push({ heading, content: buf.join('\n').trim() })
      heading = line.slice(3).trim()
      buf = []
    } else {
      buf.push(line)
    }
  }
  if (heading || buf.length) sections.push({ heading, content: buf.join('\n').trim() })
  return sections
}

// ── Auth ────────────────────────────────────────────────────────

async function getUserContext(): Promise<UserContext> {
  try {
    const hdrs = await headers()
    const authHeader = hdrs.get('authorization')

    if (authHeader?.startsWith('Bearer ') && JWKS) {
      try {
        const token = authHeader.slice(7)
        await jwtVerify(token, JWKS)
        return { isAuthenticated: true }
      } catch { /* fall through */ }
    }

    const session = await auth.api.getSession({ headers: hdrs })
    return { isAuthenticated: !!session?.user }
  } catch {
    return { isAuthenticated: false }
  }
}

// ── File access ─────────────────────────────────────────────────

function walkDir(dir: string, prefix = ''): string[] {
  const files: string[] = []
  if (!existsSync(dir)) return files
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) files.push(...walkDir(join(dir, entry.name), `${prefix}${entry.name}/`))
    else if (entry.name.endsWith('.md')) files.push(`${prefix}${entry.name}`)
  }
  return files
}

function visibleFiles(user: UserContext): string[] {
  const slugs = getVisibleSlugs(user)
  return walkDir(MD_DIR).filter(path => {
    const slug = path.split('/')[0].replace('.md', '')
    return slugs.includes(slug) || slugs.includes('*')
  })
}

// ── Tools ───────────────────────────────────────────────────────

const tools: Record<string, {
  description: string
  parameters: Record<string, string>
  execute: (user: UserContext, params: any) => Promise<string>
}> = {

  // ── Search ──────────────────────────────────────────────────

  search_docs: {
    description: "Search all documentation. Returns JSON: {results: [{type, path, title, snippet}], total, has_more}. Types: guide, api, cli, mcp.",
    parameters: { query: "string", limit: "number (optional, default 5)" },
    execute: async (user, params: { query: string; limit?: number }) => {
      const limit = Math.min(params.limit || 5, 20)
      const q = params.query.toLowerCase()
      const files = visibleFiles(user)
      const all: { type: string; path: string; title: string; snippet: string }[] = []

      for (const file of files) {
        const content = readFileSync(join(MD_DIR, file), 'utf-8')
        if (!content.toLowerCase().includes(q)) continue

        let type = 'guide'
        if (file.startsWith('api-reference/')) type = 'api'
        else if (file.startsWith('cli-reference/')) type = 'cli'
        else if (file.startsWith('mcp-reference/')) type = 'mcp'

        const title = extractTitle(content) || file
        const lines = content.split('\n')
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].toLowerCase().includes(q)) {
            all.push({ type, path: file, title, snippet: lines.slice(Math.max(0, i - 1), i + 2).join('\n').trim() })
            break
          }
        }
      }

      return JSON.stringify({ results: all.slice(0, limit), total: all.length, has_more: all.length > limit })
    },
  },

  // ── Guides ──────────────────────────────────────────────────

  list_guides: {
    description: "List available guide pages. Returns JSON: [{slug, title}].",
    parameters: {},
    execute: async (user) => {
      const files = visibleFiles(user)
      const guides = files
        .filter(f => !f.includes('/'))
        .map(f => {
          const slug = f.replace('.md', '')
          const content = readFileSync(join(MD_DIR, f), 'utf-8')
          return { slug, title: extractTitle(content) || titleCase(slug) }
        })
      return JSON.stringify(guides)
    },
  },

  fetch_guide: {
    description: "Fetch a guide page. Large pages return section headings + intro; use section param to read a specific section.",
    parameters: { slug: "string", section: "string (optional)" },
    execute: async (user, params: { slug: string; section?: string }) => {
      if (!canReadDoc(user, params.slug)) return 'Access denied. Sign in for access.'

      const filePath = join(MD_DIR, `${params.slug}.md`)
      if (!existsSync(filePath)) return `Guide not found: "${params.slug}"`

      const content = readFileSync(filePath, 'utf-8')
      if (content.length < 3000) return content

      const sections = splitByHeadings(content)

      if (params.section) {
        const match = sections.find(s =>
          s.heading.toLowerCase() === params.section!.toLowerCase() ||
          slugify(s.heading) === slugify(params.section!)
        )
        if (match) return `## ${match.heading}\n\n${match.content}`
        return `Section "${params.section}" not found. Available: ${sections.filter(s => s.heading).map(s => s.heading).join(', ')}`
      }

      const headings = sections.filter(s => s.heading).map(s => s.heading)
      let result = sections[0]?.content || ''
      if (headings.length > 0) result = `**Sections:** ${headings.join(' | ')}\n\n${result}`
      if (sections.length > 1) result += `\n\n---\n*${sections.length - 1} more section(s). Use fetch_guide("${params.slug}", section="...") to read a specific section.*`
      return result
    },
  },

  // ── API Reference ───────────────────────────────────────────

  list_api_resources: {
    description: "List API resource categories with endpoint counts. Returns JSON: [{resource, title, endpoint_count, has_types}].",
    parameters: {},
    execute: async (user) => {
      if (!user.isAuthenticated) return 'Sign in required.'
      const dir = join(MD_DIR, 'api-reference')
      if (!existsSync(dir)) return JSON.stringify([])

      const resources = readdirSync(dir, { withFileTypes: true })
        .filter(d => d.isDirectory())
        .map(d => {
          const files = readdirSync(join(dir, d.name)).filter(f => f.endsWith('.md'))
          return {
            resource: d.name,
            title: titleCase(d.name),
            endpoint_count: files.filter(f => f !== 'types.md').length,
            has_types: files.includes('types.md'),
          }
        })
        .sort((a, b) => a.resource.localeCompare(b.resource))

      return JSON.stringify(resources)
    },
  },

  fetch_api_endpoint: {
    description: 'Fetch an API endpoint doc. Use slug="types" for type definitions. Returns markdown.',
    parameters: { resource: "string", slug: "string" },
    execute: async (user, params: { resource: string; slug: string }) => {
      if (!user.isAuthenticated) return 'Sign in required.'

      const filePath = join(MD_DIR, 'api-reference', params.resource, `${params.slug}.md`)
      if (!existsSync(filePath)) {
        const resDir = join(MD_DIR, 'api-reference', params.resource)
        if (existsSync(resDir)) {
          const available = readdirSync(resDir).filter(f => f.endsWith('.md')).map(f => f.replace('.md', ''))
          return `Endpoint "${params.slug}" not found in ${params.resource}. Available: ${available.join(', ')}`
        }
        return `Resource "${params.resource}" not found.`
      }

      return readFileSync(filePath, 'utf-8')
    },
  },

  // ── CLI Reference ───────────────────────────────────────────

  list_cli_commands: {
    description: "List CLI commands. Returns JSON: [{command, description}].",
    parameters: {},
    execute: async (user) => {
      if (!user.isAuthenticated) return 'Sign in required.'
      const dir = join(MD_DIR, 'cli-reference')
      if (!existsSync(dir)) return JSON.stringify([])

      const commands: { command: string; description: string }[] = []
      const walk = (d: string, prefix: string) => {
        for (const entry of readdirSync(d, { withFileTypes: true })) {
          if (entry.isDirectory()) walk(join(d, entry.name), `${prefix}${entry.name}/`)
          else if (entry.name.endsWith('.md')) {
            const cmd = `${prefix}${entry.name.replace('.md', '')}`
            const content = readFileSync(join(d, entry.name), 'utf-8')
            commands.push({ command: cmd, description: extractTitle(content) || cmd })
          }
        }
      }
      walk(dir, '')
      return JSON.stringify(commands)
    },
  },

  fetch_cli_command: {
    description: "Fetch a CLI command doc. Use paths like \"deploy/create\" or \"login\". Returns markdown.",
    parameters: { command: "string" },
    execute: async (user, params: { command: string }) => {
      if (!user.isAuthenticated) return 'Sign in required.'

      let filePath = join(MD_DIR, 'cli-reference', params.command)
      if (!filePath.endsWith('.md')) filePath += '.md'
      if (!existsSync(filePath)) return `CLI command "${params.command}" not found.`

      return readFileSync(filePath, 'utf-8')
    },
  },

  // ── MCP Reference ──────────────────────────────────────────

  list_mcp_tools: {
    description: "List MCP tools with descriptions. Returns JSON: [{name, description}].",
    parameters: {},
    execute: async (user) => {
      if (!user.isAuthenticated) return 'Sign in required.'
      const dir = join(MD_DIR, 'mcp-reference')
      if (!existsSync(dir)) return JSON.stringify([])

      const result: { name: string; description: string }[] = []
      for (const file of readdirSync(dir).filter(f => f.endsWith('.md')).sort()) {
        const content = readFileSync(join(dir, file), 'utf-8')
        result.push({ name: extractTitle(content) || file.replace('.md', ''), description: extractDescription(content) })
      }
      return JSON.stringify(result)
    },
  },

  fetch_mcp_tool: {
    description: "Fetch an MCP tool reference page with parameters, example, and related links. Returns markdown.",
    parameters: { name: "string" },
    execute: async (user, params: { name: string }) => {
      if (!user.isAuthenticated) return 'Sign in required.'

      const slug = slugify(params.name)
      const filePath = join(MD_DIR, 'mcp-reference', `${slug}.md`)
      if (!existsSync(filePath)) return `MCP tool "${params.name}" not found.`

      return readFileSync(filePath, 'utf-8')
    },
  },

  // ── Full Reference ─────────────────────────────────────────

  get_reference: {
    description: 'Get the full API + CLI + MCP reference. Without section: returns section list. With section: returns that section content.',
    parameters: { section: "string (optional)" },
    execute: async (user, params: { section?: string }) => {
      if (!user.isAuthenticated) return 'Sign in required.'

      const llmsPath = join(process.cwd(), 'public/llms-full.txt')
      if (!existsSync(llmsPath)) return 'Full reference not available.'
      const content = readFileSync(llmsPath, 'utf-8')

      if (!params.section) {
        const headings = (content.match(/^## .+$/gm) || []).map(h => h.slice(3))
        return JSON.stringify({ sections: headings, hint: 'Use get_reference(section="...") for a specific section.' })
      }

      const regex = new RegExp(`^## ${escapeRegex(params.section)}\\s*$`, 'mi')
      const match = regex.exec(content)
      if (!match || match.index === undefined) return `Section "${params.section}" not found.`

      const rest = content.slice(match.index + match[0].length)
      const next = /^## /m.exec(rest)
      const end = next?.index !== undefined ? match.index + match[0].length + next.index : content.length

      return content.slice(match.index, end).trim()
    },
  },
}

// ── HTTP handlers ───────────────────────────────────────────────

export async function GET() {
  const user = await getUserContext()
  const baseUrl = process.env.BETTER_AUTH_URL || 'http://localhost:3300'

  return Response.json({
    name: "Glow Docs MCP",
    version: "2.0.0",
    authenticated: user.isAuthenticated,
    authorization: {
      type: "oauth2",
      authorization_url: `${baseUrl}/api/auth/authorize`,
      token_url: `${baseUrl}/api/auth/token`,
      resource_metadata_url: `${baseUrl}/.well-known/oauth-protected-resource`,
    },
    tools: Object.entries(tools).map(([name, t]) => ({ name, description: t.description })),
  })
}

export async function POST(request: Request) {
  const user = await getUserContext()
  const body = await request.json()
  const { tool: toolName, params = {} } = body

  if (!toolName || !tools[toolName]) {
    return Response.json({ error: `Unknown tool: ${toolName}` }, { status: 400 })
  }

  const result = await tools[toolName].execute(user, params)
  return Response.json({ result })
}
