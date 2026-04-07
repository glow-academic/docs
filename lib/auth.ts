import { betterAuth } from "better-auth"
import { genericOAuth, oidcProvider } from "better-auth/plugins"
import Database from "better-sqlite3"

const db = new Database("./auth.db")

export const auth = betterAuth({
  database: db,
  trustedOrigins: [process.env.BETTER_AUTH_URL || "http://localhost:3300"],
  advanced: {
    trustedProxyHeaders: true,
  },
  plugins: [
    // Sign in users via the Glow instance's OIDC endpoints
    // The Glow API proxies /authorize, /token to Keycloak
    genericOAuth({
      config: [
        {
          providerId: "glow",
          clientId: process.env.AUTH_CLIENT_ID!,
          clientSecret: process.env.AUTH_CLIENT_SECRET!,
          discoveryUrl: `${process.env.GLOW_API_URL}/.well-known/openid-configuration`,
          scopes: ["openid", "profile", "email"],
        },
      ],
    }),
    // Act as an OAuth 2.1 / OIDC provider for MCP clients
    // Any MCP client can register via /api/auth/oauth2/register
    oidcProvider({
      allowDynamicClientRegistration: true,
      loginPage: "/auth/login",
      consentPage: "/auth/consent",
    }),
  ],
})
