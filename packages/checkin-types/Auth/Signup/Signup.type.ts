export interface TeacherSignupType {
  id: string;
  email: string;
  pw: string;
  name: string;
  subject: string;
}

export interface StudentSignupType {
  id: string;
  email: string;
  pw: string;
  name: string;
}

export interface StudentInfoType {
  grade: number;
  room: number;
  number: number;
}
