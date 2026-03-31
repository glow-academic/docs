import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { AuthButton } from '@/components/AuthButton'
import { DepartmentPicker } from '@/components/DepartmentPicker'
import { CodePersonalizer } from '@/components/CodePersonalizer'
import { getSession } from '@/lib/api/server'
import { getVisibleSlugs, type UserContext } from '@/lib/authorization'
import 'nextra-theme-docs/style.css'
import './custom.css'

export const metadata = {
  title: 'Glow Docs',
  description: 'Documentation for the Glow conversational AI training platform',
}

/** Filter pageMap to only show pages the user can access.
 *  Also hides separators when the user isn't authenticated. */
function filterPageMap(pageMap: any[], visibleSlugs: Set<string>): any[] {
  // If '*' is in the set, user is authenticated — show everything
  if (visibleSlugs.has('*')) return pageMap

  return pageMap.filter((item) => {
    if (item.name === 'index' || item.route === '/') return true
    // Hide separators for unauthenticated users
    if (item.type === 'separator') return false
    // Only filter at the top level — check the first path segment
    const slug = (item.route || item.name || '').replace(/^\//, '').split('/')[0]
    if (slug && !visibleSlugs.has(slug)) return false
    return true
  })
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Build user context from session
  const session = await getSession()
  let userContext: UserContext = {
    isAuthenticated: false,
  }

  if (session?.user) {
    userContext.isAuthenticated = true
  }

  // Get full page map, then filter by authorization
  const fullPageMap = await getPageMap()
  const visibleSlugs = new Set(getVisibleSlugs(userContext))
  const filteredPageMap = filterPageMap([...fullPageMap], visibleSlugs)

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={
            <Navbar logo={<b>Glow</b>}>
              <DepartmentPicker />
              <AuthButton />
            </Navbar>
          }
          pageMap={filteredPageMap}
          editLink={null}
          feedback={{ content: null }}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={
            <Footer>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span>MIT {new Date().getFullYear()} &copy; LearnLoop LLC</span>
                <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>
                  LLM-friendly: <a href="/llms.txt" style={{ textDecoration: 'underline' }}>llms.txt</a> | <a href="/llms-full.txt" style={{ textDecoration: 'underline' }}>Full reference (llms-full.txt)</a>
                </span>
              </div>
            </Footer>
          }
        >
          <CodePersonalizer />
          {children}
        </Layout>
      </body>
    </html>
  )
}
