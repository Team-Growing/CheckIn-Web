import { LecturesResponse, Lectures, Response } from "@checkin/types";

export interface LectureRepository {
  enrolLecture(id: number): Promise<Response>;
  getLectureById(id: number): Promise<Lectures>;
  getTodayLecture(): Promise<LecturesResponse>;
  getMyLectures(): Promise<LecturesResponse>;
  getEnrolmentLectures(grade: number): Promise<LecturesResponse>;
}

export interface EnroLectureByIdParam {
  id: string;
}

export interface GetLecturesParam extends Lectures {}

export interface getLectureByIdParam {
  id: string;
}
