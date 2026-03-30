import nextra from 'nextra'

const withNextra = nextra({})

export default withNextra({
  output: 'standalone',
  devIndicators: false,
  async rewrites() {
    return [
      {
        source: '/:path*.md',
        destination: '/md/:path*.md',
      },
    ]
  },
})
