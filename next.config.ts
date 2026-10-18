import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // GitHub Pages only serves /resume/ from resume/index.html; without this the
  // export emits resume.html and the extensionless URL 404s on the real host.
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  // Allow the CDP/headless test origins to connect to the dev HMR websocket.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
