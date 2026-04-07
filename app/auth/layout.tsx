/**
 * Minimal layout for auth pages — no Nextra chrome.
 * Used by /auth/login and /auth/consent during MCP OAuth flow.
 */
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4">
      {children}
    </div>
  )
}
