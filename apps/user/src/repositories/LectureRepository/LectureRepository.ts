import { LecturesResponse, Lectures, Response } from "@checkin/types";

export interface LectureRepository {
  enrolLecture(id: enroLectureByIdParam): Promise<Response>;
  getLectureById(id: getLectureByIdParam): Promise<Lectures>;
  getTodayLecture(): Promise<LecturesResponse>;
  getMyLectures(): Promise<LecturesResponse>;
  getEnrolmentLectures(grade: number): Promise<LecturesResponse>;
}

export interface enroLectureByIdParam {
  id: string;
}

export interface GetLecturesParam extends Lectures {}

export interface getLectureByIdParam {
  id: string;
}
