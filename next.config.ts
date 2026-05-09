import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
