/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: undefined,
  },
  serverRuntimeConfig: {
    port: process.env.PORT || 3000,
  },
  publicRuntimeConfig: {
    port: process.env.PORT || 3000,
  },
}

export default nextConfig
