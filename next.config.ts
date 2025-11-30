import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dcassetcdn.com",
      },
      {
        protocol: "https",
        hostname: "www.themealdb.com",
      },
    ],
  },
};

export default nextConfig;
