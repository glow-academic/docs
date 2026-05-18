# `POST` `/docs-mcp`

# `POST` `/docs-mcp`

Docs Mcp Proxy

Forward an MCP request to the Glow docs sibling.

This route is behind McpOAuthMiddleware, so the user is already
authenticated. We re-sign with the Glow API's key so the docs
can verify against our /jwks.

## Response

```
{}
```
