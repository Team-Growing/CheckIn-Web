/** @type {import('next').NextConfig} */

const ENV = {
  ENV: process.env.NODE_ENV ?? "",
  API_HOST: process.env.API_HOST ?? process.env.NEXT_PUBLIC_BASE_URL,
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

module.exports = nextConfig;

// Injected content via Sentry wizard below
