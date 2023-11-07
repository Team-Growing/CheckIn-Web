import { AttendanceListResponse } from "@checkin/types";
import { AttendanceRepository } from "./AttendanceRepository";
import apiClient from "@/libs/Auth/customAxios";

class AttendanceRepositoryImpl implements AttendanceRepository {
  public async getAttendanceList(
    lectureId: number
  ): Promise<AttendanceListResponse> {
    const { data } = await apiClient.get(`/attendance/${lectureId}/attendants`);
    return data;
  }
}

export default new AttendanceRepositoryImpl();
