/** @type {import('next').NextConfig} */

const ENV = {
  ENV: process.env.NODE_ENV ?? "",
  API_HOST: process.env.API_HOST ?? process.env.REACT_APP_API_KEY,
};

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@checkin/ui"],
  swcMinify: true,
  publicRuntimeConfig: { ...ENV },
};

module.exports = nextConfig;
