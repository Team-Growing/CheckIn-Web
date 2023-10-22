import { Response } from "@checkin/types";
import {
  AttendLectureParam,
  AttendanceRepository,
} from "./AttendanceRepository";
import apiClient from "@/libs/Auth/customAxios";

class AttendanceRepositoryImpl implements AttendanceRepository {
  public async attendanceLecture({
    code,
    lectureId,
  }: AttendLectureParam): Promise<Response> {
    const { data } = await apiClient.post(`/attendance/${lectureId}`, { code });
    return data;
  }

  public async getAttendanceList(lectureId: number) {
    const { data } = await apiClient.get(`/attendance/${lectureId}/attendants`);
    return data;
  }
}

export default new AttendanceRepositoryImpl();
