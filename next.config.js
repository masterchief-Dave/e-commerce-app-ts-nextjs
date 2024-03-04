/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: process.env.NODE_ENV === 'development' ? true : false,
    domains: [
      'cdn.shopify.com',
      'images.unsplash.com',
      'lh3.googleusercontent.com',
      'res.cloudinary.com',
      'ucrolthr.sirv.com',
      'images-na.ssl-images-amazon.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  experimental: {
    serverComponentsExternalPackages: ['mongoose'],
    appDir: false
  }
}

module.exports = nextConfig
