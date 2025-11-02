import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const dev = process.env.NODE_ENV === "development";

const setResolveAlias = (
  config: Configuration,
  name: string,
  alias: string,
): void => {
  config.resolve ??= {};
  config.resolve.alias ??= {};

  if (Array.isArray(config.resolve.alias)) {
    config.resolve.alias.push({
      name,
      alias,
    });
  } else {
    config.resolve.alias[name] = alias;
  }
};

// NOTE: resolve: `ReferenceError: window is not defined`
const budouxAlias = "budoux/dist/index";

const config: NextConfig = {
  output: "export",
  reactStrictMode: true,
  reactCompiler: !dev,
  experimental: {
    esmExternals: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
    webpackBuildWorker: true,
  },
  turbopack: {
    resolveAlias: {
      budoux: budouxAlias,
    },
  },
  webpack: dev
    ? undefined
    : (config: Configuration): Configuration => {
        setResolveAlias(config, "budoux", budouxAlias);

        return config;
      },
};

export default config;
