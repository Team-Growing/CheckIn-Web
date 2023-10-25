import { Response } from "@checkin/types";

export interface AbsenceRepository {
  applyAbsence(param: ApplyAbsenceParam): Promise<Response>;
}

export interface ApplyAbsenceParam {
  lectureId: number;
  reason: string;
}
