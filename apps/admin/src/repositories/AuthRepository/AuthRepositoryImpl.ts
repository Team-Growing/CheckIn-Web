import { LoginResponse } from "@checkin/types";
import { AuthRepository, LoginParam } from "./AuthRepository";
import apiClient from "@/libs/Auth/customAxios";

class AuthRepositoryImpl implements AuthRepository {
  public async login(loginData: LoginParam): Promise<LoginResponse> {
    const { data } = await apiClient.post("/sign-in", loginData);
    return data;
  }
}

export default new AuthRepositoryImpl();
