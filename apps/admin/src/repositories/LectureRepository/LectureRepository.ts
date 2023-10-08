import { Lectures, LecturesResponse, Response } from "@checkin/types";

export interface LectureRepository {
  postLecture(params: Lectures): Promise<Response>;
  getLecturesByLectureStatus({
    grade,
    status,
  }: getLecturesByLectureStatusParam): Promise<LecturesResponse>;
}

export interface postLectureParam extends Lectures {}

export interface getLecturesByLectureStatusParam {
  grade: number;
  status: string;
}
