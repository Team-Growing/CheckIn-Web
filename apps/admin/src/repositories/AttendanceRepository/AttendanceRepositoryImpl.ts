import { AttendanceListResponse } from "@checkin/types";
import {
  AttendanceRepository,
  ChangeAttendanceStatusParam,
} from "./AttendanceRepository";
import apiClient from "@/libs/Auth/customAxios";

class AttendanceRepositoryImpl implements AttendanceRepository {
  public async getAttendanceList(
    lectureId: number
  ): Promise<AttendanceListResponse> {
    const { data } = await apiClient.get(`/attendance/${lectureId}/attendants`);
    return data;
  }

  public async postConfirmAttendance({
    lectureId,
    memberId,
  }: ChangeAttendanceStatusParam): Promise<Response> {
    const { data } = await apiClient.post(
      `/attendance/confirmation/${lectureId}`,
      {
        memberId,
      }
    );
    return data;
  }
  public async deleteCancelAttdendance({
    lectureId,
    memberId,
  }: ChangeAttendanceStatusParam): Promise<Response> {
    const { data } = await apiClient.delete(
      `/attendance/${lectureId}/cancellation`,
      { data: { memberId } }
    );
    return data;
  }
}

export default new AttendanceRepositoryImpl();
