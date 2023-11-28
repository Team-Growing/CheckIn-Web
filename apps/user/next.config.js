/** @type {import('next').NextConfig} */

const { withSentryConfig } = require("@sentry/nextjs");

const ENV = {
  ENV: process.env.NODE_ENV ?? "",
  API_HOST: process.env.API_HOST ?? process.env.REACT_APP_API_KEY,
};

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@checkin/ui"],
  swcMinify: true,
  sentry: {
    hideSourceMaps: true,
    tunnelRoute: "/monitoring-tunnel",
    transpileClientSDK: true,
  },
  publicRuntimeConfig: { ...ENV },
};

const sentryWebpackPluginOptions = {
  org: "checkin",
  project: "checkin-user",
  slient: true,
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);

// Injected content via Sentry wizard below
