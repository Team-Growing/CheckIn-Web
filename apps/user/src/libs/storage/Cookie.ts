import { Storage } from "./Storage";
import cookie from "js-cookie";

class Cookie implements Storage {
  get(key: string): string | undefined {
    return cookie.get(key);
  }
  set(key: string, value: string): void {
    cookie.set(key, value);
  }
  remove(key: string): void {
    cookie.remove(key);
  }
}

export default new Cookie();
