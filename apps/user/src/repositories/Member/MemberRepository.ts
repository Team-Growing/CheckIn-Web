import { MemberType } from "@/types/Member/Member.type";

export interface MemberRepository {
  getMemberInfo(): Promise<MemberType>;
}
