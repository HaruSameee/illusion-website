// @ts-check

/**
 * @typedef {import("webpack").Configuration} Configuration
 */

/**
 * @type {import("next").NextConfig}
 */
export default {
  reactStrictMode: true,
  experimental: {
    esmExternals: true
  },
  /**
   * @param {Configuration} config
   * @returns {Configuration}
   */
  webpack: config => {
    config.resolve ??= {};
    config.resolve.alias ??= {};

    const budouxAlias = "budoux/dist/index";

    if (Array.isArray(config.resolve.alias)) {
      config.resolve.alias.push({
        name: "budoux",
        alias: budouxAlias
      });
    } else {
      config.resolve.alias.budoux = budouxAlias;
    }

    return config;
  }
};
