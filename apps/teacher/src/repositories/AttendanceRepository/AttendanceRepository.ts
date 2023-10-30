import {
  LecturesResponse,
  Lectures,
  Response,
  AttendanceCode,
} from "@checkin/types";

export interface AttendanceRepository {
  attendanceLecture({ code, lectureId }: AttendLectureParam): Promise<Response>;
  getAttendanceCode(lectureId: number): Promise<AttendanceCode>;
  getAttendance({ lectureId, memberId }: AttendMemberParam): Promise<Response>;
  postConfirmAttendance(param: PostConfirmAttendanceParam): Promise<Response>;
}

export interface PostConfirmAttendanceParam {
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
