import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  // Allow the CDP/headless test origins to connect to the dev HMR websocket.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
