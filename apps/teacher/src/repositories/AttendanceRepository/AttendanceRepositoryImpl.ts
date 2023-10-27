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

  public async getAttendanceCode(): Promise<AttendanceCode> {
    const { data } = await apiClient.get(`/attendance/code/9`);
    return data;
  }

  public async getAttendantsCode(): Promise<AttendanceListResponse> {
    const { data } = await apiClient.get(`/attendance/9/attendants`);
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
      memberId,
    });
    return data;
  }
}

export default new AttendanceRepositoryImpl();
