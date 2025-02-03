/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    baseUrl: "https://newhabiba.wordreward.net/api",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "newhabiba.wordreward.net",
      },
    ],
  },
};

export default nextConfig;
