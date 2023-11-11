/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      "unsplash.com",
      "images.unsplash.com",
      "cdn.sanity.io",
    ].map((pattern) => ({
      protocol: "https",
      hostname: pattern,
    })),
  },
}

module.exports = nextConfig
