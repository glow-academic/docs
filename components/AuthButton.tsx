'use client'

import { authClient } from '@/lib/auth-client'

export function AuthButton() {
  const { data: session, isPending } = authClient.useSession()

  if (isPending) {
    return <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>...</span>
  }

  if (session?.user) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem' }}>
        <span style={{ opacity: 0.7 }}>{session.user.email || session.user.name}</span>
        <button
          onClick={() => authClient.signOut()}
          style={{
            background: 'none',
            border: '1px solid #e5e7eb',
            borderRadius: '0.375rem',
            padding: '0.25rem 0.5rem',
            cursor: 'pointer',
            fontSize: '0.75rem',
          }}
        >
          Sign out
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={() => authClient.signIn.social({ provider: 'glow' })}
      style={{
        background: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '0.375rem',
        padding: '0.375rem 0.75rem',
        cursor: 'pointer',
        fontSize: '0.8rem',
        fontWeight: 500,
      }}
    >
      Sign in
    </button>
  )
}
