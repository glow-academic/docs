import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { VersionSwitcher } from '@/components/VersionSwitcher'
import 'nextra-theme-docs/style.css'
import './custom.css'

export const metadata = {
  title: 'LearnLoop Docs',
  description: 'Documentation for the LearnLoop platform',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={
            <Navbar
              logo={<b>LearnLoop</b>}
            >
              <VersionSwitcher />
            </Navbar>
          }
          pageMap={await getPageMap()}
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
          {children}
        </Layout>
      </body>
    </html>
  )
}
