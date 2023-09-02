import apiClient from "@/libs/Auth/customAxios";
import { MemberRepository } from "./MemberRepository";
import { MemberType } from "@/types/Member/Member.type";

class MemberRepositoryImpl implements MemberRepository {
  public async getMemberInfo(): Promise<MemberType> {
    const { data } = await apiClient.get("/memberInfo/my");
    return data;
  }
}

export default new MemberRepositoryImpl();
