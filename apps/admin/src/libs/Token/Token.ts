import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constant/Token/Token.constant";
import { Storage } from "../Storage/Storage";
import Cookie from "../Storage/Cookie";

class Token {
  private storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  public getToken(
    key: typeof ACCESS_TOKEN_KEY | typeof REFRESH_TOKEN_KEY
  ): string | undefined {
    return this.storage.get(key);
  }

  public setToken(
    key: typeof ACCESS_TOKEN_KEY | typeof REFRESH_TOKEN_KEY,
    value: string
  ): void {
    this.storage.set(key, value);
  }

  public removeToken(
    key: typeof ACCESS_TOKEN_KEY | typeof REFRESH_TOKEN_KEY
  ): void {
    this.storage.remove(key);
  }

  public clearToken(): void {
    this.storage.remove(ACCESS_TOKEN_KEY);
    this.storage.remove(REFRESH_TOKEN_KEY);
  }
}

export default new Token(Cookie);
