/** @type {import('next').NextConfig} */

const ENV = {
  ENV: process.env.NODE_ENV ?? "",
  API_HOST: process.env.API_HOST ?? "http://101.101.209.184:33333",
};

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@checkin/ui"],
  swcMinify: true,
  publicRuntimeConfig: { ...ENV },
};

module.exports = nextConfig;
