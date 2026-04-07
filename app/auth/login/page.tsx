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
      credentials: "include",
      body: JSON.stringify({ provider: "glow", callbackURL }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.url) window.location.href = data.url
      })
      .catch(() => {
        window.location.href = "/"
      })
  }, [searchParams])

  return null
}

export default function LoginPage() {
  return (
    <div className="w-full max-w-sm mx-auto text-center">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
          <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
          Signing in
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Redirecting to Glow...
        </p>
        <div className="flex justify-center">
          <div className="h-1.5 w-24 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full animate-[loading_1.5s_ease-in-out_infinite]" style={{ width: "60%" }} />
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
        Glow Docs
      </p>
      <Suspense>
        <LoginFlow />
      </Suspense>
    </div>
  )
}
