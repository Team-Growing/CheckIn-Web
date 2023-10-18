import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "@/constant/Token/Token.constant";
import { InternalAxiosRequestConfig } from "axios";
import Token from "../token/Token";

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
