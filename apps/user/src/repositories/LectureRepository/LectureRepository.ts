import { Lectures, Response } from "@checkin/types";

export interface LectureRepository {
  enrolLecture(id: enroLectureByIdParam): Promise<Response>;
  getLectures(params: GetLecturesParam): Promise<Response>;
  getLectureById(id: getLectureByIdParam): Promise<Response>;
}

export interface enroLectureByIdParam {
  id: string;
}

export interface GetLecturesParam extends Lectures {}

export interface getLectureByIdParam {
  id: string;
}
