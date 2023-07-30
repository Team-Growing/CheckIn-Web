import axios from "axios";
import config from "../../config/config.json";
import Token from "../Token/Token";
import { REQUEST_TOKEN_KEY } from "@/constant/Token/Token.constant";

export const customAxios = axios.create({
  baseURL: config.SERVER,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${Token.getToken("access-token")}`,
  },
});
