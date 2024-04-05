const fs = require("fs")
const path = require("path")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  images: {
    unoptimized: process.env.NODE_ENV === "development" ? true : false,
    domains: [
      "cdn.shopify.com",
      "images.unsplash.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
      "ucrolthr.sirv.com",
      "images-na.ssl-images-amazon.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
    // appDir: false,
  },
  // exportPathMap: async function () {
  //   return {
  //     "/": { page: "/src/pages" },
  //     wishlist: { page: "/src/pages/wishlist" },
  //   }
  // },
  // exportPathMap: async function (defaultPathMap) {
  //   const pagesDir = path.join(__dirname, "./src/pages")
  //   const pages = fs.readdirSync(pagesDir)

  //   const pathMap = {}
  //   pages.forEach((pageFile) => {
  //     if (
  //       !pageFile.endsWith(".tsx") ||
  //       pageFile === "_app.tsx" ||
  //       pageFile === "document.tsx"
  //     ) {
  //       return
  //     }
  //     const pageName = pageFile.replace(/\.tsx$/, "")
  //     const route = pageName === "index" ? "/" : `/${pageName}`

  //     pathMap[route] = { page: `/${pageName}` }
  //   })

  //   return pathMap
  // },
}

module.exports = nextConfig
