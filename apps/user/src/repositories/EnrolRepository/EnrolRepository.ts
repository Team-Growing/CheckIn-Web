import { Response } from "@checkin/types";

export interface EnrolRepository {
  enrolLectureById(lectureId: number): Promise<Response>;
}
