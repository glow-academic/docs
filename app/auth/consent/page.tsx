"use client"

import { Suspense, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"

function ConsentFlow() {
  const searchParams = useSearchParams()
  const triggered = useRef(false)

  useEffect(() => {
    if (triggered.current) return
    triggered.current = true

    // Auto-approve consent for MCP clients
    const clientId = searchParams.get("client_id") || ""
    const scope = searchParams.get("scope") || ""

    fetch("/api/auth/oauth2/consent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        accept: true,
        clientId,
        scopes: scope.split(" ").filter(Boolean),
      }),
    })
      .then((res) => {
        if (res.redirected) {
          window.location.href = res.url
        } else {
          return res.json().then((data) => {
            if (data.redirectURI) {
              window.location.href = data.redirectURI
            } else {
              // Fallback: go back to authorize
              const params = searchParams.toString()
              window.location.href = `/api/auth/oauth2/authorize?${params}`
            }
          })
        }
      })
      .catch(() => {
        window.location.href = "/"
      })
  }, [searchParams])

  return null
}

export default function ConsentPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto" />
        <p className="mt-4 text-gray-500">Authorizing...</p>
      </div>
      <Suspense>
        <ConsentFlow />
      </Suspense>
    </div>
  )
}
