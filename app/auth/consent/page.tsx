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
      body: JSON.stringify({ accept: true, clientId, scopes: scope.split(" ").filter(Boolean) }),
    })
      .then((res) => {
        if (res.redirected) { window.location.href = res.url; return }
        return res.json().then((data) => {
          if (data.redirectURI) window.location.href = data.redirectURI
          else window.location.href = `/api/auth/oauth2/authorize?${searchParams.toString()}`
        })
      })
      .catch(() => { window.location.href = "/" })
  }, [searchParams])

  return null
}

export default function ConsentPage() {
  return (
    <div style={{ textAlign: "center", maxWidth: "20rem", width: "100%", padding: "0 1rem" }}>
      <div style={{ background: "white", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb", padding: "2.5rem 2rem" }}>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
          <svg width="20" height="20" fill="none" stroke="#16a34a" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h1 style={{ fontSize: "1.125rem", fontWeight: 600, color: "#111827", marginBottom: "0.25rem" }}>Authorizing</h1>
        <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "1.5rem" }}>Granting access to your docs...</p>
        <div style={{ height: 6, width: "6rem", background: "#e5e7eb", borderRadius: 3, margin: "0 auto", overflow: "hidden" }}>
          <div style={{ height: "100%", width: "40%", background: "#16a34a", borderRadius: 3, animation: "slide 1.2s ease-in-out infinite" }} />
        </div>
      </div>
      <p style={{ marginTop: "1rem", fontSize: "0.75rem", color: "#9ca3af" }}>Glow Docs</p>
      <style>{`@keyframes slide { 0% { transform: translateX(-100%); } 100% { transform: translateX(350%); } }`}</style>
      <Suspense><ConsentFlow /></Suspense>
    </div>
  )
}
