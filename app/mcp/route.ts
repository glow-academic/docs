/**
 * /mcp — MCP Streamable HTTP server for Glow documentation.
 *
 * Serves 10 documentation tools via the standard MCP protocol (JSON-RPC 2.0
 * over Streamable HTTP). Auth via Glow API JWT (Bearer token).
 *
 * This is the docs MCP — completely separate from the Glow API MCP
 * which lives on the client domain.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js"
import { z } from "zod"
import { createRemoteJWKSet, jwtVerify } from "jose"
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

// Glow API JWKS for validating Bearer tokens
const AUTH_ISSUER = process.env.AUTH_ISSUER || process.env.GLOW_API_URL || ""
const JWKS = AUTH_ISSUER
  ? createRemoteJWKSet(new URL(`${AUTH_ISSUER.replace(/\/$/, "")}/jwks`))
  : null

const DOCS_URL = process.env.BETTER_AUTH_URL || "http://localhost:3300"

// ── Auth ────────────────────────────────────────────────────────

async function getUserContext(request: Request): Promise<UserContext> {
  const authHeader = request.headers.get("authorization")
  if (!authHeader?.startsWith("Bearer ") || !JWKS) {
    return { isAuthenticated: false }
  }
  try {
    await jwtVerify(authHeader.slice(7), JWKS)
    return { isAuthenticated: true }
  } catch {
    return { isAuthenticated: false }
  }
}

// ── MCP Server Factory ──────────────────────────────────────────

function createServer(user: UserContext) {
  const server = new McpServer({
    name: "Glow Docs",
    version: "2.0.0",
  })

  server.registerTool(
    "search_docs",
    {
      description: "Search all documentation. Returns JSON with results containing type, path, title, and snippet.",
      inputSchema: z.object({
        query: z.string().describe("Search query"),
        limit: z.number().optional().default(5).describe("Max results (default 5, max 20)"),
      }),
    },
    async ({ query, limit }) => ({
      content: [{ type: "text" as const, text: await searchDocs(user, query, limit) }],
    })
  )

  server.registerTool(
    "list_guides",
    {
      description: "List available guide pages with slugs and titles.",
      inputSchema: z.object({}),
    },
    async () => ({
      content: [{ type: "text" as const, text: await listGuides(user) }],
    })
  )

  server.registerTool(
    "fetch_guide",
    {
      description: "Fetch a guide page. Large pages return section headings; use section param to read a specific section.",
      inputSchema: z.object({
        slug: z.string().describe("Guide slug"),
        section: z.string().optional().describe("Section heading to fetch"),
      }),
    },
    async ({ slug, section }) => ({
      content: [{ type: "text" as const, text: await fetchGuide(user, slug, section) }],
    })
  )

  server.registerTool(
    "list_api_resources",
    {
      description: "List API resource categories with endpoint counts.",
      inputSchema: z.object({}),
    },
    async () => ({
      content: [{ type: "text" as const, text: await listApiResources(user) }],
    })
  )

  server.registerTool(
    "fetch_api_endpoint",
    {
      description: "Fetch an API endpoint doc. Use slug='types' for type definitions.",
      inputSchema: z.object({
        resource: z.string().describe("Resource category (e.g. 'personas', 'simulations')"),
        slug: z.string().describe("Endpoint slug or 'types'"),
      }),
    },
    async ({ resource, slug }) => ({
      content: [{ type: "text" as const, text: await fetchApiEndpoint(user, resource, slug) }],
    })
  )

  server.registerTool(
    "list_cli_commands",
    {
      description: "List CLI commands with descriptions.",
      inputSchema: z.object({}),
    },
    async () => ({
      content: [{ type: "text" as const, text: await listCliCommands(user) }],
    })
  )

  server.registerTool(
    "fetch_cli_command",
    {
      description: "Fetch a CLI command doc. Use paths like 'deploy/create' or 'login'.",
      inputSchema: z.object({
        command: z.string().describe("Command path"),
      }),
    },
    async ({ command }) => ({
      content: [{ type: "text" as const, text: await fetchCliCommand(user, command) }],
    })
  )

  server.registerTool(
    "list_mcp_tools",
    {
      description: "List MCP tools with descriptions.",
      inputSchema: z.object({}),
    },
    async () => ({
      content: [{ type: "text" as const, text: await listMcpTools(user) }],
    })
  )

  server.registerTool(
    "fetch_mcp_tool",
    {
      description: "Fetch an MCP tool reference page with parameters, examples, and related links.",
      inputSchema: z.object({
        name: z.string().describe("Tool name"),
      }),
    },
    async ({ name }) => ({
      content: [{ type: "text" as const, text: await fetchMcpTool(user, name) }],
    })
  )

  server.registerTool(
    "get_reference",
    {
      description: "Get the full API + CLI + MCP reference. Without section: returns section list. With section: returns content.",
      inputSchema: z.object({
        section: z.string().optional().describe("Section heading to fetch"),
      }),
    },
    async ({ section }) => ({
      content: [{ type: "text" as const, text: await getReference(user, section) }],
    })
  )

  return server
}

// ── Route Handlers ──────────────────────────────────────────────

export async function POST(request: Request) {
  // Check auth — return 401 with PRM discovery if missing
  const authHeader = request.headers.get("authorization")
  if (!authHeader?.startsWith("Bearer ")) {
    return new Response(null, {
      status: 401,
      headers: {
        "WWW-Authenticate": `Bearer resource_metadata="${DOCS_URL}/.well-known/oauth-protected-resource"`,
      },
    })
  }

  const user = await getUserContext(request)

  // Stateless: fresh server + transport per request
  const server = createServer(user)
  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
  })
  await server.connect(transport)
  return transport.handleRequest(request)
}

export async function GET() {
  // Stateless mode: SSE streams not supported
  return new Response(
    JSON.stringify({ jsonrpc: "2.0", error: { code: -32000, message: "Method not allowed." }, id: null }),
    { status: 405, headers: { "Content-Type": "application/json" } }
  )
}

export async function DELETE() {
  // Stateless mode: session termination not supported
  return new Response(
    JSON.stringify({ jsonrpc: "2.0", error: { code: -32000, message: "Method not allowed." }, id: null }),
    { status: 405, headers: { "Content-Type": "application/json" } }
  )
}
