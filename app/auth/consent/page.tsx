"use client"

import { Suspense, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"

function ConsentFlow() {
  const searchParams = useSearchParams()
  const triggered = useRef(false)

  useEffect(() => {
    if (triggered.current) return
    triggered.current = true

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
    <div className="w-full max-w-sm mx-auto text-center">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-4">
          <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
          Authorizing
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Granting access to your docs...
        </p>
        <div className="flex justify-center">
          <div className="h-1.5 w-24 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 rounded-full animate-[loading_1.5s_ease-in-out_infinite]" style={{ width: "60%" }} />
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
        Glow Docs
      </p>
      <Suspense>
        <ConsentFlow />
      </Suspense>
    </div>
  )
}
