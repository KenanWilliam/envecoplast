import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  outputFileTracingRoot: undefined,
  experimental: {
    turbo: undefined,
  },
}

export default nextConfig