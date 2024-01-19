import { Response } from "../util/response";

interface StudentInfo {
  grade: number;
  room: number;
  number: number;
}

interface MemberTypeData {
  id: string;
  email: string;
  name: string;
  memberRole: string;
  studentInfo: StudentInfo;
}

export interface MemberType extends Response {
  data: MemberTypeData;
}

export interface MemberInfoData extends MemberTypeData {
  subject: string;
}

export interface MemberInfo {
  info: MemberInfoData;
}

export interface TeacherData {
  id: string;
  name: string;
}

export interface TeachersResponse extends Response {
  data: TeacherData[];
}
