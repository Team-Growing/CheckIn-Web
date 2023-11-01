import { AbsencesResponse } from "@checkin/types";
import { AbsenceRepository } from "./AbsenceRepository";
import apiClient from "@/libs/Auth/customAxios";

class AbsenceRepositoryImpl implements AbsenceRepository {
  public async getAbsences(date: string): Promise<AbsencesResponse> {
    const { data } = await apiClient.get(`/absence?date=${date}`);
    return data;
  }

  public async allowAbsence(id: number): Promise<Response> {
    const { data } = await apiClient.patch(`/absence/allow/${id}`);
    return data;
  }

  public async denyAbsence(id: number): Promise<Response> {
    const { data } = await apiClient.patch(`/absence/deny/${id}`);
    return data;
  }
}

export default new AbsenceRepositoryImpl();
