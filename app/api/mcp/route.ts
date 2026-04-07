/**
 * /api/mcp — Legacy REST endpoint for docs tools.
 *
 * Kept for backward compatibility. The standard MCP Streamable HTTP
 * server is at /mcp. This endpoint uses a simple JSON POST interface.
 */

import { createRemoteJWKSet, jwtVerify } from "jose"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import type { UserContext } from "@/lib/authorization"
import {
  searchDocs,
  listGuides,
  fetchGuide,
  listApiResources,
  fetchApiEndpoint,
  listCliCommands,
  fetchCliCommand,
  listMcpTools,
  fetchMcpTool,
  getReference,
} from "@/lib/mcp/tools"

const AUTH_ISSUER = process.env.AUTH_ISSUER || ""
const JWKS = AUTH_ISSUER
  ? createRemoteJWKSet(new URL(`${AUTH_ISSUER.replace(/\/$/, "")}/jwks`))
  : null

async function getUserContext(): Promise<UserContext> {
  try {
    const hdrs = await headers()
    const authHeader = hdrs.get('authorization')
    if (authHeader?.startsWith('Bearer ') && JWKS) {
      try {
        await jwtVerify(authHeader.slice(7), JWKS)
        return { isAuthenticated: true }
      } catch { /* fall through */ }
    }
    const session = await auth.api.getSession({ headers: hdrs })
    return { isAuthenticated: !!session?.user }
  } catch {
    return { isAuthenticated: false }
  }
}

const tools: Record<string, (user: UserContext, params: any) => Promise<string>> = {
  search_docs: (u, p) => searchDocs(u, p.query, p.limit),
  list_guides: (u) => listGuides(u),
  fetch_guide: (u, p) => fetchGuide(u, p.slug, p.section),
  list_api_resources: (u) => listApiResources(u),
  fetch_api_endpoint: (u, p) => fetchApiEndpoint(u, p.resource, p.slug),
  list_cli_commands: (u) => listCliCommands(u),
  fetch_cli_command: (u, p) => fetchCliCommand(u, p.command),
  list_mcp_tools: (u) => listMcpTools(u),
  fetch_mcp_tool: (u, p) => fetchMcpTool(u, p.name),
  get_reference: (u, p) => getReference(u, p.section),
}

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
    tools: Object.keys(tools).map(name => ({ name })),
  })
}

export async function POST(request: Request) {
  const user = await getUserContext()
  const body = await request.json()
  const { tool: toolName, params = {} } = body
  if (!toolName || !tools[toolName]) {
    return Response.json({ error: `Unknown tool: ${toolName}` }, { status: 400 })
  }
  const result = await tools[toolName](user, params)
  return Response.json({ result })
}
