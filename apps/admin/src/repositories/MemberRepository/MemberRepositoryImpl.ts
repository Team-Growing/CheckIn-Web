import { MemberType } from "@checkin/types";
import { MemberRepository } from "./MemberRepository";
import apiClient from "@/libs/Auth/customAxios";

class MemberRepositoryImpl implements MemberRepository {
  public async getMemberInfo(): Promise<MemberType> {
    const { data } = await apiClient.get("/member/my");
    return data;
  }
}

export default new MemberRepositoryImpl();
