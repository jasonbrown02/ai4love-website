/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  poweredByHeader: false,
  useFileSystemPublicRoutes: true,
  output: 'export',
  // Handle transpiling mapbox-gl module
  transpilePackages: ['mapbox-gl']
}

module.exports = nextConfig
