import { NoticeResponse, Response } from "@checkin/types";

export interface NoticeRepository {
  getActiveNotice(): Promise<NoticeResponse>;
}
