export interface Storage {
  getCookie(key: string): string | undefined;
  setCookie(key: string, value: string): void;
  removeCookie(key: string): void;
}
