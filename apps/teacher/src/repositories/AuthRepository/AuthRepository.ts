import {
  Login,
  LoginResponse,
  Response,
  TeacherSignupType,
} from "@checkin/types";

export interface AuthRepository {
  signupTeacher(studentSignupData: SignupTeacherParam): Promise<Response>;
  login(loginData: LoginParam): Promise<LoginResponse>;
}

export interface SignupTeacherParam extends TeacherSignupType {}

export interface LoginParam extends Login {}
