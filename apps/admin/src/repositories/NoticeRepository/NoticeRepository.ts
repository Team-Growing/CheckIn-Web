import { NoticeResponse, Response } from "@checkin/types";

export interface NoticeRepository {
  writeNotice({ content }: writeNoticeParam): Promise<Response>;
  getAllNotice(): Promise<NoticeResponse>;
  getActiveNotice(): Promise<NoticeResponse>;
  deleteNotice(id: string): Promise<Response>;
  patchNoticeStatus({
    id,
    noticeStatus,
  }: patchNoticeStatusParam): Promise<Response>;
}

export interface writeNoticeParam {
  content: string;
}

export interface patchNoticeStatusParam {
  id: string;
  noticeStatus: "ACTIVE" | "DEACTIVATED";
}
