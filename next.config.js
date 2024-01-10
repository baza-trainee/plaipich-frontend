/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.gyazo.com",
      },
    ],
  },
};

module.exports = nextConfig;
