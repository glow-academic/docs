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
    const callbackURL = params ? `/api/auth/oauth2/authorize?${params}` : "/"

    fetch("/api/auth/sign-in/social", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ provider: "glow", callbackURL }),
    })
      .then((res) => res.json())
      .then((data) => { if (data.url) window.location.href = data.url })
      .catch(() => { window.location.href = "/" })
  }, [searchParams])

  return null
}

export default function LoginPage() {
  return (
    <div style={{ textAlign: "center", maxWidth: "20rem", width: "100%", padding: "0 1rem" }}>
      <div style={{ background: "white", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb", padding: "2.5rem 2rem" }}>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
          <svg width="20" height="20" fill="none" stroke="#3b82f6" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h1 style={{ fontSize: "1.125rem", fontWeight: 600, color: "#111827", marginBottom: "0.25rem" }}>Signing in</h1>
        <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "1.5rem" }}>Redirecting to Glow...</p>
        <div style={{ height: 6, width: "6rem", background: "#e5e7eb", borderRadius: 3, margin: "0 auto", overflow: "hidden" }}>
          <div style={{ height: "100%", width: "40%", background: "#3b82f6", borderRadius: 3, animation: "slide 1.2s ease-in-out infinite" }} />
        </div>
      </div>
      <p style={{ marginTop: "1rem", fontSize: "0.75rem", color: "#9ca3af" }}>Glow Docs</p>
      <style>{`@keyframes slide { 0% { transform: translateX(-100%); } 100% { transform: translateX(350%); } }`}</style>
      <Suspense><LoginFlow /></Suspense>
    </div>
  )
}
