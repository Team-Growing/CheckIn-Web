import { AbsencesResponse, Response } from "@checkin/types";

export interface AbsenceRepository {
  applyAbsence(param: ApplyAbsenceParam): Promise<Response>;
  getMyAbsence(): Promise<AbsencesResponse>;
}

export interface ApplyAbsenceParam {
  lectureId: number;
  reason: string;
}
