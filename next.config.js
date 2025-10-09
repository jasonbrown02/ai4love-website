/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  poweredByHeader: false,
  useFileSystemPublicRoutes: true,
  // Removed 'output: export' to enable API routes for feedback hub
  // Handle transpiling mapbox-gl module
  transpilePackages: ['mapbox-gl'],
  // Increase body size limit for file uploads
  api: {
    bodyParser: {
      sizeLimit: '50mb',
    },
  },
}

module.exports = nextConfig
