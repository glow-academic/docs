import nextra from 'nextra'

const withNextra = nextra({})

export default withNextra({
  output: 'standalone',
  basePath: process.env.DOCS_BASE_PATH || '',
  devIndicators: false,
  async rewrites() {
    return [
      {
        // Serve .md files: /glow/agents/api.md → /md/glow/agents/api.md
        source: '/:path*.md',
        destination: '/md/:path*.md',
      },
    ]
  },
})
