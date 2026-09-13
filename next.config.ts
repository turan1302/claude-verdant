import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    loader: "custom",
    loaderFile: "./lib/unsplash-loader.ts",
  },
};

export default nextConfig;
