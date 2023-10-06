import { AttendanceListResponse } from "@checkin/types";

export interface AttendanceRepository {
  getAttendanceList(lectureId: number): Promise<AttendanceListResponse>;
}
