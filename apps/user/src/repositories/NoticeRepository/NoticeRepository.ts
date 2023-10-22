import { NoticeResponse } from "@checkin/types";

export interface NoticeRepository {
  getActiveNotice(): Promise<NoticeResponse>;
}
