import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.mdx": ["mdx-loader"], // Example rule, modify as needed
      },
    },
  },
  output: "standalone", // Ensures compatibility with Webpack instead of Turbopack
};

export default nextConfig;
