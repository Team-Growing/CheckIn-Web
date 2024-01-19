import { MemberAbsencesResponse, Response } from "@checkin/types";

export interface AbsenceRepository {
  applyAbsence(param: ApplyAbsenceParam): Promise<Response>;
  getMyAbsence(): Promise<MemberAbsencesResponse>;
}

export interface ApplyAbsenceParam {
  lectureId: number;
  reason: string;
}
