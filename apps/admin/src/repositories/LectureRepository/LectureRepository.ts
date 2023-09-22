import { Lectures, Response } from "@checkin/types";

export interface LectureRepository {
  postLecture(params: Lectures): Promise<Response>;
}

export interface postLectureParam extends Lectures {}
