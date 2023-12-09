import axios, { AxiosRequestConfig } from "axios";
import { requestInterceptor } from "./requestInterceptor";
import {
  REQUEST_TOKEN_KEY,
  ACCESS_TOKEN_KEY,
} from "@/constant/Token/Token.constant";
import Token from "../token/Token";

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${Token.getToken(ACCESS_TOKEN_KEY)}`,
  },
};

const apiClient = axios.create(axiosRequestConfig);

apiClient.interceptors.request.use(requestInterceptor, (err) => err);

export default apiClient;

export const setAccessToken = (token: string) => {
  apiClient.defaults.headers[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
};
