import { AbsencesResponse } from "@checkin/types";

export interface AbsenceRepository {
  getAbsences(date: string): Promise<AbsencesResponse>;
  denyAbsence(id: number): Promise<Response>;
  allowAbsence(id: number): Promise<Response>;
}
