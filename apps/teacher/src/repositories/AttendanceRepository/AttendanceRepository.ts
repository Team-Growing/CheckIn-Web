import {
  LecturesResponse,
  Lectures,
  Response,
  AttendanceCode,
} from "@checkin/types";

export interface AttendanceRepository {
  attendanceLecture({ code, lectureId }: AttendLectureParam): Promise<Response>;
  getAttendanceCode(lectureId: number): Promise<AttendanceCode | void>;
  getAttendance({ lectureId, memberId }: AttendMemberParam): Promise<Response>;
  postConfirmAttendance(param: ChangeAttendanceStatusParam): Promise<Response>;
  deleteCancelAttdendance(
    param: ChangeAttendanceStatusParam
  ): Promise<Response>;
}

export interface ChangeAttendanceStatusParam {
  lectureId: number;
  memberId: string;
}

export interface enroLectureByIdParam {
  id: string;
}

export interface GetLecturesParam extends Lectures {}

export interface getLectureByIdParam {
  id: string;
}

export interface AttendLectureParam {
  code: string;
  lectureId: string;
}

export interface AttendMemberParam {
  lectureId: number;
  memberId: string;
}
