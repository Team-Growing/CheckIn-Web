import {
  LecturesResponse,
  Lectures,
  Response,
  AttendanceCode,
} from "@checkin/types";

export interface AttendanceRepository {
  attendanceLecture({ code, lectureId }: AttendLectureParam): Promise<Response>;
  getAttendanceCode(): Promise<AttendanceCode>;
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
