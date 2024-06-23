/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
    // If `serverActions` needs to be enabled, specify as an object or remove if not needed
    serverActions: {},
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "images.clerk.dev",
      },
      {
        protocol: "https",
        hostname: "uploadthing.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
