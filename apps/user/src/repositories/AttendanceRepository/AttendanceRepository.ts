import { AttendanceListResponse, Response } from "@checkin/types";

export interface AttendanceRepository {
  attendanceLecture({ code, lectureId }: AttendLectureParam): Promise<Response>;
  getAttendanceList(lectureId: number): Promise<AttendanceListResponse>;
}

export interface AttendLectureParam {
  code: string;
  lectureId: string;
}
