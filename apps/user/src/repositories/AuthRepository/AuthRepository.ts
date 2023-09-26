import {
  Login,
  LoginResponse,
  Response,
  StudentInfoType,
  StudentSignupType,
} from "@checkin/types";

export interface AuthRepository {
  signupStudent(studentSignupData: SignupStudentParam): Promise<Response>;
  login(loginData: LoginParam): Promise<LoginResponse>;
}

export interface SignupStudentParam extends StudentSignupType {
  studentInfo: StudentInfoType;
}

export interface LoginParam extends Login {}
