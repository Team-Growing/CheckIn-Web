import { Storage } from "./storage";
import cookie from "js-cookie";

class Token implements Storage {
  public getCookie(key: string): string | undefined {
    let item = undefined;
    if (cookie.get(key) !== undefined) {
      item = cookie.get(key);
    }
    return item;
  }

  public setCookie(key: string, value: string): void {
    cookie.set(key, value);
  }

  public removeCookie(key: string): void {
    cookie.remove(key);
  }
}

export default new Token();
