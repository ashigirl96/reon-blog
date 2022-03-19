/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_NOTION_API_KEY: process.env.NEXT_PUBLIC_NOTION_API_KEY,
  },
}
