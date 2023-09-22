import { Login, LoginResponse } from "@checkin/types";

export interface AuthRepository {
  login(loginData: LoginParam): Promise<LoginResponse>;
}

export interface LoginParam extends Login {}
