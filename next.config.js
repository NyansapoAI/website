/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      "unsplash.com",
      "images.unsplash.com",
      "s3.amazonaws.com",
      "cdn.sanity.io",
      "learningportal.iiep.unesco.org", // Added new hostname
    ].map((pattern) => ({
      protocol: "https",
      hostname: pattern,
    })),
  },
}

module.exports = nextConfig
