/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "assets.coingecko.com",
      },
    ],
  },
};

export default nextConfig;
