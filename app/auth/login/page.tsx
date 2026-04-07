"use client"

import { useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"

/**
 * /auth/login — Auto-trigger Glow OIDC sign-in.
 *
 * better-auth's oidcProvider redirects here (loginPage) when an
 * unauthenticated user hits /api/auth/oauth2/authorize. The OAuth
 * params are in the query string AND in the oidc_login_prompt cookie.
 *
 * After sign-in completes, the user has a session and the browser
 * redirects back to the authorize endpoint which resumes the OAuth
 * flow using the cookie.
 */
export default function LoginPage() {
  const searchParams = useSearchParams()
  const triggered = useRef(false)

  useEffect(() => {
    if (triggered.current) return
    triggered.current = true

    // Build the callback URL — after login, return to authorize with the same params
    const params = searchParams.toString()
    const callbackURL = params
      ? `/api/auth/oauth2/authorize?${params}`
      : "/"

    // Trigger Glow OIDC sign-in via better-auth
    fetch("/api/auth/sign-in/social", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        provider: "glow",
        callbackURL,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.url) {
          window.location.href = data.url
        }
      })
      .catch(() => {
        // Fallback: redirect to homepage
        window.location.href = "/"
      })
  }, [searchParams])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto" />
        <p className="mt-4 text-gray-500">Redirecting to sign in...</p>
      </div>
    </div>
  )
}
