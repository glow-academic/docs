import nextra from 'nextra'

const withNextra = nextra({ defaultShowCopyCode: true })

export default withNextra({
  // Pure static export — emits to ./out/ for GitHub Pages.
  output: 'export',
  // GH Pages serves /foo/ not /foo, so make our links match.
  trailingSlash: true,
  // No Image Optimization runtime on static; fall back to plain <img>.
  images: { unoptimized: true },
  // Project-pages deploy: served at https://glow-academic.github.io/docs/.
  // Remove both lines if/when we move to a custom domain (CNAME → root).
  basePath: '/docs',
  assetPrefix: '/docs',
  devIndicators: false,
  // Skip typechecking during build — already done in CI test stage.
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  // Note: `rewrites()` doesn't work in static export. The previous
  // /:path*.md → /md/:path*.md rewrite is gone; Nextra emits .md
  // alongside the MDX output when configured to.
})
