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
  // Mirror the basePath into the client bundle so components that
  // emit raw asset URLs (e.g. <video src=...> in DemoVideo) can
  // prepend it — Next only auto-prefixes for next/image + next/link.
  // Keep this in sync with basePath above; both go together when we
  // move to a custom domain (just set to '').
  env: {
    NEXT_PUBLIC_BASE_PATH: '/docs',
  },
  devIndicators: false,
  // Skip typechecking during build — already done in CI test stage.
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  // Note: `rewrites()` doesn't work in static export, so per-page Markdown
  // can't be served via a rewrite. Instead scripts/emit-page-md.mjs runs as a
  // postbuild step and writes a real out/<route>.md beside every page (see
  // the "build" script in package.json).
})
