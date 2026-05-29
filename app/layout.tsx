import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Logo } from '@/components/Logo'
import 'nextra-theme-docs/style.css'
import './custom.css'

export const metadata = {
  title: 'Glow Docs',
  description: 'Documentation for the Glow conversational AI training platform',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={<Navbar logo={<Logo />} />}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/glow-academic/docs/tree/main"
          editLink="Edit this page on GitHub →"
          feedback={{ content: 'Question? Give us feedback →' }}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={
            <Footer>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span>{new Date().getFullYear()} &copy; Glow contributors — <a href="https://github.com/glow-academic/docs/blob/main/LICENSE" style={{ textDecoration: 'underline' }}>PolyForm Noncommercial 1.0.0</a></span>
                <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>
                  LLM-friendly: <a href="/docs/llms.txt" style={{ textDecoration: 'underline' }}>llms.txt</a> | <a href="/docs/llms-full.txt" style={{ textDecoration: 'underline' }}>Full reference (llms-full.txt)</a>
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
