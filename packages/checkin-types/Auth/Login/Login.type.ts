import { Response } from "../../util/response";

export interface Login {
  id: string;
  pw: string;
}

export interface LoginResponse extends Response {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}
