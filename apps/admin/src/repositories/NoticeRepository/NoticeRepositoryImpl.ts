import apiClient from "@/libs/Auth/customAxios";
import {
  NoticeRepository,
  patchNoticeStatusParam,
  writeNoticeParam,
} from "./NoticeRepository";
import { NoticeResponse, Response } from "@checkin/types";

class NoticeRepositoryImpl implements NoticeRepository {
  public async writeNotice({ content }: writeNoticeParam): Promise<Response> {
    const { data } = await apiClient.post("/notice", { content });
    return data;
  }

  public async getAllNotice(): Promise<NoticeResponse> {
    const { data } = await apiClient.get("/notice/all");
    return data;
  }

  public async getActiveNotice(): Promise<NoticeResponse> {
    const { data } = await apiClient.get("/notice/active");
    return data;
  }

  public async deleteNotice(id: string): Promise<Response> {
    const { data } = await apiClient.delete(`/notice/${id}`);
    return data;
  }

  public async patchNoticeStatus({
    id,
    noticeStatus,
  }: patchNoticeStatusParam): Promise<Response> {
    const { data } = await apiClient.patch(`/notice/status/${id}`, {
      noticeStatus,
    });
    return data;
  }
}

export default new NoticeRepositoryImpl();
