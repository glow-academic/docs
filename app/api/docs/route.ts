import { getSession, getMe, listDepartments } from "@/lib/api/server"
import { getVisibleSlugs, type UserContext } from "@/lib/authorization"

/**
 * GET /api/docs -- returns the user's context and visible doc sections.
 * Used by the sidebar and MCP tools to scope visible content.
 */
export async function GET() {
  const session = await getSession()

  let userContext: UserContext = {
    isAuthenticated: false,
  }

  if (session?.user) {
    userContext.isAuthenticated = true
  }

  const sections = getVisibleSlugs(userContext)

  return Response.json({
    authenticated: userContext.isAuthenticated,
    user: session?.user ? {
      name: session.user.name,
      email: session.user.email,
    } : null,
    sections,
  })
}
