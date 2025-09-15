/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  poweredByHeader: false,
  useFileSystemPublicRoutes: true,
  output: 'export',
  distDir: 'out'
}

module.exports = nextConfig
