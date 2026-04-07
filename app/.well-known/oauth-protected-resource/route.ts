const DOCS_URL = process.env.BETTER_AUTH_URL || "http://localhost:3300"

export async function GET() {
  return Response.json({
    resource: `${DOCS_URL}/mcp`,
    authorization_servers: [DOCS_URL],
    scopes_supported: ["openid", "profile", "email"],
    code_challenge_methods_supported: ["S256"],
  })
}
