import { MemberType } from "@checkin/types";

export interface MemberRepository {
  getMemberInfo(): Promise<MemberType>;
}
