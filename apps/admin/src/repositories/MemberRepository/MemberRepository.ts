import { MemberType, TeachersResponse } from "@checkin/types";

export interface MemberRepository {
  getMemberInfo(): Promise<MemberType>;
  getTeachers(): Promise<TeachersResponse>;
}
