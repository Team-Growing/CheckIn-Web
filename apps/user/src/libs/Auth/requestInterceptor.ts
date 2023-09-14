import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "@/constant/Token/Token.constant";
import Token from "@/hooks/token/Token";
import { InternalAxiosRequestConfig } from "axios";

export const requestInterceptor = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  if (typeof window !== "undefined") {
    const token = Token.getToken(ACCESS_TOKEN_KEY);

    if (token) {
      config.headers[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
    }
  }

  return config;
};
