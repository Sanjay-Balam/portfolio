/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
    output: 'standalone',
  },
  env: {
    EMAIL: process.env.EMAIL,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    RECEIVER_EMAIL: process.env.RECEIVER_EMAIL,
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
