import { AbsencesResponse } from "@checkin/types";
import { AbsenceRepository } from "./AbsenceRepository";
import apiClient from "@/libs/Auth/customAxios";

class AbsenceRepositoryImpl implements AbsenceRepository {
  public async getAbsences(date: string): Promise<AbsencesResponse> {
    const { data } = await apiClient.get(`/absence?date=${date}`);
    return data;
  }
}

export default new AbsenceRepositoryImpl();
