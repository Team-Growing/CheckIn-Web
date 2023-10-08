import {
  LectureStatusType,
  Lectures,
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
}

export interface postLectureParam extends Lectures {}

export interface getLecturesByLectureStatusParam {
  grade: number;
  status: string;
}

export interface PatchLectureStatusParam {
  lectureStatus: LectureStatusType | "";
  lectureId: number;
}
