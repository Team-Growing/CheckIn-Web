import axios from "axios";
import config from "../../config/config.json";
import { REQUEST_TOKEN_KEY } from "../../constants/Token/Token.constant";
import Token from "../Token/Token";

export const customAxios = axios.create({
  baseURL: config.SERVER,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${Token.getToken("access-token")}`,
  },
});
