import apiClient from "@/libs/Auth/customAxios";
import { MemberRepository } from "./MemberRepository";
import { LecturesResponse, MemberType } from "@checkin/types";

class MemberRepositoryImpl implements MemberRepository {
  public async getMemberInfo(): Promise<MemberType> {
    const { data } = await apiClient.get("/member/my");
    return data;
  }
}

export default new MemberRepositoryImpl();
