/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.shopify.com',
      'images.unsplash.com',
      'lh3.googleusercontent.com',
      'res.cloudinary.com',
      'ucrolthr.sirv.com',
    ],
  },
}

module.exports = nextConfig
