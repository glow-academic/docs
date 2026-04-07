"use client"

import { Suspense, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"

function LoginFlow() {
  const searchParams = useSearchParams()
  const triggered = useRef(false)

  useEffect(() => {
    if (triggered.current) return
    triggered.current = true

    const params = searchParams.toString()
    const callbackURL = params
      ? `/api/auth/oauth2/authorize?${params}`
      : "/"

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
        window.location.href = "/"
      })
  }, [searchParams])

  return null
}

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto" />
        <p className="mt-4 text-gray-500">Redirecting to sign in...</p>
      </div>
      <Suspense>
        <LoginFlow />
      </Suspense>
    </div>
  )
}
