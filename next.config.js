/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_MAP_KEY: process.env.GOOGLE_MAP_KEY,
  }
}

module.exports = nextConfig
