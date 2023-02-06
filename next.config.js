/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com'
      }
    ]
  },
  env: {
    API_URL: process.env.NODE_ENV === 'production' ? 'https://' + process.env.VERCEL_URL : 'http://localhost:3000'
  }
};

module.exports = nextConfig;
