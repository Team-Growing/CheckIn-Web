import {
  LectureStatusType,
  Lectures,
  LecturesAllResponse,
  LecturesResponse,
  Response,
} from "@checkin/types";

export interface LectureRepository {
  postLecture(params: Lectures): Promise<Response>;
  getLecturesByLectureStatus({
    grade,
    status,
  }: getLecturesByLectureStatusParam): Promise<LecturesResponse>;
  patchLectureStatus({
    lectureStatus,
  }: PatchLectureStatusParam): Promise<Response>;
  getTodayLectures(): Promise<LecturesResponse>;
  getAllLectures(grade: number): Promise<LecturesAllResponse>;
}

export interface postLectureParam extends Lectures {}

export interface getLecturesByLectureStatusParam {
  grade: number;
  status: string;
}

export interface PatchLectureStatusParam {
  lectureStatus: LectureStatusType | string;
  ids: number[];
}
