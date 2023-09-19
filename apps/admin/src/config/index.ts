import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

interface RuntimeConfig {
  ENV: "production" | "development";
  API_HOST: string;
}

const runtimeConfig: RuntimeConfig = publicRuntimeConfig;

export const CONFIG: RuntimeConfig = {
  ...runtimeConfig,
};
