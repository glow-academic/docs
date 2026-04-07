/**
 * Auth layout — full-screen overlay that covers Nextra chrome.
 */
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "linear-gradient(to bottom, #f9fafb, #f3f4f6)",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      {children}
    </div>
  )
}
