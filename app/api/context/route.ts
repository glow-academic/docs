import { getSession } from "@/lib/api/server"
import Database from "better-sqlite3"

/**
 * GET /api/context -- returns personalization context for code examples.
 * Includes department ID, instance URLs, and a truncated token for display.
 */
export async function GET(request: Request) {
  const session = await getSession()
  if (!session?.user?.id) {
    return Response.json({ authenticated: false })
  }

  // Get the selected department from query param
  const url = new URL(request.url)
  const selectedDeptId = url.searchParams.get('dept') || ''

  // Get the access token from the account table
  let accessToken = ''
  try {
    const db = new Database("./auth.db")
    const account = db.prepare(
      "SELECT accessToken FROM account WHERE userId = ? AND providerId = 'glow' LIMIT 1"
    ).get(session.user.id) as { accessToken: string } | undefined
    db.close()
    accessToken = account?.accessToken || ''
  } catch {}

  const glowUrl = process.env.GLOW_API_URL || 'https://glow.example.com'

  return Response.json({
    authenticated: true,
    user: {
      name: session.user.name,
      email: session.user.email,
    },
    // Values for code example personalization
    replacements: {
      'https://glow.example.com': glowUrl,
      'dept_abc123': selectedDeptId || 'dept_abc123',
      '$GLOW_TOKEN': accessToken || '$GLOW_TOKEN',
      '&lt;your-department-id&gt;': selectedDeptId || '&lt;your-department-id&gt;',
      '&lt;department-id&gt;': selectedDeptId || '&lt;department-id&gt;',
    },
  })
}
