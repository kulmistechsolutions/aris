import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site lives under /en and /so; send bare paths to the English version.
  async redirects() {
    return [
      { source: "/", destination: "/en", permanent: false },
      { source: "/:page(about|services|projects|contact)", destination: "/en/:page", permanent: false },
    ];
  },
};

export default nextConfig;
