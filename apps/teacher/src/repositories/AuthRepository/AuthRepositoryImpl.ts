import apiClient from "@/libs/Auth/customAxios";
import {
  AuthRepository,
  LoginParam,
  SignupTeacherParam,
} from "./AuthRepository";
import { LoginResponse, Response } from "@checkin/types";

class AuthRepositoryImpl implements AuthRepository {
  public async login(loginData: LoginParam): Promise<LoginResponse> {
    const { data } = await apiClient.post("/sign-in", loginData);
    return data;
  }

  public async signupTeacher(
    studentSignupData: SignupTeacherParam
  ): Promise<Response> {
    const { data } = await apiClient.post(
      "/sign-up/teacher",
      studentSignupData
    );
    return data;
  }
}

export default new AuthRepositoryImpl();
