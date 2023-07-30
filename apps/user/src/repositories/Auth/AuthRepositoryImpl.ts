import { customAxios } from "../../libs/Auth/customAxios";
import { LoginResponse } from "../../types/Auth/Login/Login.type";
import { Response } from "../../types/util/response";
import {
  AuthRepository,
  LoginParam,
  SignupStudentParam,
  SignupTeacherParam,
} from "./AuthRepository";

class AuthRepositoryImpl implements AuthRepository {
  public async login(loginData: LoginParam): Promise<LoginResponse> {
    const { data } = await customAxios.post("/sign-in", loginData);
    return data;
  }

  public async signupStudent(
    studentSignupData: SignupStudentParam
  ): Promise<Response> {
    const { data } = await customAxios.post(
      "/sign-up/student",
      studentSignupData
    );
    return data;
  }

  public async signupTeacher(
    teacherSignupData: SignupTeacherParam
  ): Promise<Response> {
    const { data } = await customAxios.post(
      "/sign-up/teacher",
      teacherSignupData
    );
    return data;
  }
}

export default new AuthRepositoryImpl();
