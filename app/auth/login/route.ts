import { auth } from "@/lib/auth"
import { NextRequest } from "next/server"

/**
 * GET /auth/login — Server-side redirect to Glow OIDC sign-in.
 *
 * better-auth's oidcProvider redirects here when unauthenticated.
 * Server-side redirect avoids CORS/origin issues with client-side fetch.
 */
export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams.toString()
  const callbackURL = params
    ? `/api/auth/oauth2/authorize?${params}`
    : "/"

  const response = await auth.api.signInSocial({
    body: {
      provider: "glow",
      callbackURL,
    },
  })

  if (response?.url) {
    return Response.redirect(response.url)
  }

  return Response.redirect(new URL("/", request.url))
}
