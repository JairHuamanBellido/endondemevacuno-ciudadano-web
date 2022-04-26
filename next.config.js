const path = require("path");
const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_MAP_KEY: process.env.GOOGLE_MAP_KEY,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  ...withPWA({
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === "development",
    },
  }),
}

module.exports = nextConfig
