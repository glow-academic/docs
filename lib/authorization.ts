/**
 * Shared authorization layer.
 *
 * Both web pages and MCP tools use these functions.
 * This prevents drift between what the UI shows and what the API returns.
 */

export interface UserContext {
  isAuthenticated: boolean
}

/**
 * Page visibility tiers:
 *
 * PUBLIC        -- visible to everyone (index, start, how-it-works, tutorial, patterns)
 * AUTHENTICATED -- visible to any logged-in user (everything else)
 */

const PUBLIC_SLUGS = new Set([
  'index',
  'start',
  'how-it-works',
  'tutorial',
  'patterns',
])

export function canReadDoc(user: UserContext, slug: string): boolean {
  if (PUBLIC_SLUGS.has(slug)) return true
  if (!user.isAuthenticated) return false
  // All other pages require authentication
  return true
}

export function getVisibleSlugs(user: UserContext): string[] {
  const visible = [...PUBLIC_SLUGS]
  if (user.isAuthenticated) {
    // When authenticated, everything is visible
    visible.push('*')
  }
  return visible
}

export function canAccessMcpTool(user: UserContext, toolName: string): boolean {
  return user.isAuthenticated
}
