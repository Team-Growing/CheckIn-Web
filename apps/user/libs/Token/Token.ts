import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/Token/Token.constant";
import Cookie from "../Storage/Cookie";
import { Storage } from "../Storage/Storage";

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
