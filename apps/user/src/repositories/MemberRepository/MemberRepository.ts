import { LecturesResponse, MemberType } from "@checkin/types";

export interface MemberRepository {
  getMemberInfo(): Promise<MemberType>;
  getMemberLectures(): Promise<LecturesResponse>;
}
