import { LecturesResponse, Lectures, Response } from "@checkin/types";

export interface LectureRepository {
  enrolLecture(id: enroLectureByIdParam): Promise<Response>;
  getLectureById(id: getLectureByIdParam): Promise<Lectures>;
  getTodayLecture(): Promise<LecturesResponse>;
  attendanceLecture({ code, lectureId }: AttendLectureParam): Promise<Response>;
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
