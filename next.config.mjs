import nextra from 'nextra'

const withNextra = nextra({ defaultShowCopyCode: true })

export default withNextra({
  output: 'standalone',
  devIndicators: false,
  // Skip typechecking during build — already done in CI test stage.
  // Saves ~4GB heap and minutes on 946-page docs build.
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  async rewrites() {
    return [
      {
        source: '/:path*.md',
        destination: '/md/:path*.md',
      },
    ]
  },
})
