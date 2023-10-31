import { AbsencesResponse } from "@checkin/types";

export interface AbsenceRepository {
  getAbsences(date: string): Promise<AbsencesResponse>;
}
