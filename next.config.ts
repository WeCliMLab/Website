import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This tells Next.js to generate a fully static export in the `out/` directory
  output: "export",

  // Optional but helpful: ensures URLs end with a slash and map nicely to folders like out/about/index.html
  trailingSlash: true,

  // Since we're doing a static export, disable the built-in Image Optimization
  // (otherwise it expects a running Next.js server)
  images: {
    unoptimized: true
  }
};

export default nextConfig;
