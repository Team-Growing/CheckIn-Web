import { AbsencesResponse, Response } from "@checkin/types";
import { AbsenceRepository, ApplyAbsenceParam } from "./AbsenceRepository";
import apiClient from "@/libs/Auth/customAxios";

class AbsenceRepositoryImpl implements AbsenceRepository {
  public async applyAbsence(param: ApplyAbsenceParam): Promise<Response> {
    const { data } = await apiClient.post("/absence", param);
    return data;
  }

  public async getMyAbsence(): Promise<AbsencesResponse> {
    const { data } = await apiClient.get("/absence/my");
    return data;
  }
}

export default new AbsenceRepositoryImpl();
