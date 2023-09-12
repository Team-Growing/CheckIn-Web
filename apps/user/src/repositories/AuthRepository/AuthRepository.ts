import {
  Login,
  LoginResponse,
  Response,
  SignupStudent,
  SignupTeacher,
} from "@checkin/types";

export interface AuthRepository {
  signupStudent(studentSignupData: SignupStudentParam): Promise<Response>;
  signupTeacher(teacherSignupData: SignupTeacherParam): Promise<Response>;
  login(loginData: LoginParam): Promise<LoginResponse>;
}

export interface SignupStudentParam extends SignupStudent {}

export interface SignupTeacherParam extends SignupTeacher {}

export interface LoginParam extends Login {}
