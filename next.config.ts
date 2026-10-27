import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site lives under /en; send bare paths and the retired Somali (/so) pages there.
  async redirects() {
    return [
      { source: "/", destination: "/en", permanent: false },
      { source: "/:page(about|services|projects|contact)", destination: "/en/:page", permanent: false },
      { source: "/so", destination: "/en", permanent: true },
      { source: "/so/:path*", destination: "/en/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
