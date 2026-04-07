import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Middleware to protect doc pages based on auth.
 *
 * Public (no auth): /, /start, /how-it-works, /tutorial, /patterns,
 *                   /api/auth/*, /_next/*, /api/mcp (discovery)
 * Protected (auth required): all other pages, .md files, llms-full.txt
 */

// Pages accessible without auth
const PUBLIC_PATHS = new Set([
  '/',
  '/start',
  '/how-it-works',
  '/tutorial',
  '/patterns',
  '/llms.txt',
  '/health',
])

// Prefixes that are always public
const PUBLIC_PREFIXES = ['/api/', '/_next', '/favicon.ico', '/.well-known', '/mcp', '/auth/']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Always allow auth routes, static assets, well-known
  for (const prefix of PUBLIC_PREFIXES) {
    if (pathname.startsWith(prefix)) return NextResponse.next()
  }

  // Allow MCP discovery (GET only returns info)
  if (pathname === '/api/mcp' && request.method === 'GET') {
    return NextResponse.next()
  }

  // Allow explicitly public paths
  if (PUBLIC_PATHS.has(pathname)) {
    return NextResponse.next()
  }

  // Check for session cookie
  const sessionCookie = request.cookies.get('better-auth.session_token')

  if (!sessionCookie) {
    // Protected .md and llms-full.txt -- return 401
    if (pathname.endsWith('.md') || pathname === '/llms-full.txt') {
      return new NextResponse('Authentication required. Sign in at the docs homepage.', {
        status: 401,
        headers: { 'Content-Type': 'text/plain' },
      })
    }

    // Protected page routes -- redirect to home with sign-in prompt
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
