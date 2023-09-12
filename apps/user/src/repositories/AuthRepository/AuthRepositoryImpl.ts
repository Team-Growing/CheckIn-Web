import apiClient from "@/libs/Auth/customAxios";
import {
  AuthRepository,
  LoginParam,
  SignupStudentParam,
  SignupTeacherParam,
} from "./AuthRepository";
import { LoginResponse, Response } from "@checkin/types";

class AuthRepositoryImpl implements AuthRepository {
  public async login(loginData: LoginParam): Promise<LoginResponse> {
    const { data } = await apiClient.post("/sign-in", loginData);
    return data;
  }

  public async signupStudent(
    studentSignupData: SignupStudentParam
  ): Promise<Response> {
    const { data } = await apiClient.post(
      "/sign-up/student",
      studentSignupData
    );
    return data;
  }

  public async signupTeacher(
    teacherSignupData: SignupTeacherParam
  ): Promise<Response> {
    const { data } = await apiClient.post(
      "/sign-up/teacher",
      teacherSignupData
    );
    return data;
  }
}

export default new AuthRepositoryImpl();
