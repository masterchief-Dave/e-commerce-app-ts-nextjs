/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://e-commerce-app-ts-nextjs.vercel.app",
  generateRobotsTxt: true,
}
