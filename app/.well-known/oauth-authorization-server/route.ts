const DOCS_URL = process.env.BETTER_AUTH_URL || "http://localhost:3300"

export async function GET() {
  return Response.json({
    issuer: DOCS_URL,
    authorization_endpoint: `${DOCS_URL}/api/auth/oauth2/authorize`,
    token_endpoint: `${DOCS_URL}/api/auth/oauth2/token`,
    registration_endpoint: `${DOCS_URL}/api/auth/oauth2/register`,
    scopes_supported: ["openid", "profile", "email", "mcp:tools", "mcp:docs"],
    response_types_supported: ["code"],
    grant_types_supported: ["authorization_code"],
    token_endpoint_auth_methods_supported: ["client_secret_post", "client_secret_basic"],
    code_challenge_methods_supported: ["S256"],
  })
}
