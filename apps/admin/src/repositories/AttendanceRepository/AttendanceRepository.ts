import { AttendanceListResponse } from "@checkin/types";

export interface AttendanceRepository {
  getAttendanceList(lectureId: number): Promise<AttendanceListResponse>;
  postConfirmAttendance(param: ChangeAttendanceStatusParam): Promise<Response>;
  deleteCancelAttdendance(
    param: ChangeAttendanceStatusParam
  ): Promise<Response>;
}

export interface ChangeAttendanceStatusParam {
  lectureId: number;
  memberId: string;
}
