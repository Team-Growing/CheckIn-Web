import { Login, LoginResponse } from "../../types/Auth/Login/Login.type";
import {
  SignupStudent,
  SignupTeacher,
} from "../../types/Auth/Signup/Signup.type";
import { Response } from "../../types/util/response";

export interface AuthRepository {
  signupStudent(studentSignupData: SignupStudentParam): Promise<Response>;
  signupTeacher(teacherSignupData: SignupTeacherParam): Promise<Response>;
  login(loginData: LoginParam): Promise<LoginResponse>;
}

export interface SignupStudentParam extends SignupStudent {}

export interface SignupTeacherParam extends SignupTeacher {}

export interface LoginParam extends Login {}
