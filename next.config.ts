import type { NextConfig } from "next";

const config: NextConfig = {
  output: "export",
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
    reactCompiler: true,
  },
};

export default config;
