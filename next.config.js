/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      }, {
        protocol: 'https',
        hostname: 'apicolombiastorage.blob.core.windows.net',
      },
    ],
  },
}

module.exports = nextConfig
