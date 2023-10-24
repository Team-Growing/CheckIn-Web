import { NoticeResponse } from "@checkin/types";
import { NoticeRepository } from "./NoticeRepository";
import apiClient from "@/libs/Auth/customAxios";

class NoticeRepositoryImpl implements NoticeRepository {
  public async getActiveNotice(): Promise<NoticeResponse> {
    const { data } = await apiClient.get("/notice/active");
    return data;
  }
}

export default new NoticeRepositoryImpl();
