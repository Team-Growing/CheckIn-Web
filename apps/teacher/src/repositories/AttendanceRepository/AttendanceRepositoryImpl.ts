import {
  AttendanceCode,
  AttendanceCodeResponse,
  AttendanceListResponse,
  Lectures,
  LecturesResponse,
  Response,
} from "@checkin/types";
import {
  AttendLectureParam,
  AttendMemberParam,
  AttendanceRepository,
  ChangeAttendanceStatusParam,
  enroLectureByIdParam,
  getLectureByIdParam,
} from "./AttendanceRepository";
import apiClient from "@/libs/Auth/customAxios";
import { promises } from "dns";

class AttendanceRepositoryImpl implements AttendanceRepository {
  public async attendanceLecture({
    code,
    lectureId,
  }: AttendLectureParam): Promise<Response> {
    const { data } = await apiClient.post(`/attendance/${lectureId}`, { code });
    return data;
  }

  public async getAttendanceCode(lectureId: number): Promise<AttendanceCode> {
    const { data } = await apiClient.get(`/attendance/code/${lectureId}`);
    return data;
  }

  public async getAttendants(
    lectureId: number
  ): Promise<AttendanceListResponse> {
    const { data } = await apiClient.get(`/attendance/${lectureId}/attendants`);
    return data;
  }

  public async getChangeCode({
    lectureId,
  }: AttendanceCodeResponse): Promise<Response> {
    const { data } = await apiClient.patch(`/attendance/code/${lectureId}`);
    return data;
  }

  public async getAttendance({
    lectureId,
    memberId,
  }: AttendMemberParam): Promise<Response> {
    const { data } = await apiClient.post(`/attendance/confirmation/9`, {
      lectureId,
      memberId,
    });
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
      `/attendance/${lectureId}/cancellation/${memberId}`
    );
    return data;
  }
}

export default new AttendanceRepositoryImpl();
