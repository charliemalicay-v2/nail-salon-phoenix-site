import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The original site uses trailing-slash URLs (/services/, /menu/); keep them so links and SEO paths carry over.
  trailingSlash: true,
  // A package-lock.json exists higher up the tree; pin the root to this project.
  turbopack: { root: process.cwd() },
};

export default nextConfig;
