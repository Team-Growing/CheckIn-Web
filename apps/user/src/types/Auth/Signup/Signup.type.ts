export interface SignupTeacher {
  id: string;
  email: string;
  pw: string;
  name: string;
}

export interface SignupStudent {
  id: string;
  email: string;
  pw: string;
  name: string;
  studentInfo: {
    grade: number;
    room: number;
    number: number;
  };
}

export interface SignupStudentData {
  email: string;
  id: string;
  name: string;
  pw: string;
}

export interface SignupStudentInfo {
  grade: number;
  number: number;
  room: number;
}
