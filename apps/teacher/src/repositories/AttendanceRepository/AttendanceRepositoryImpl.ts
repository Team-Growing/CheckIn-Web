import {
  AttendanceCode,
  Lectures,
  LecturesResponse,
  Response,
} from "@checkin/types";
import {
  AttendLectureParam,
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
    const { data } = await apiClient.get(`/attendance/code/1`);
    return data;
  }
}

export default new AttendanceRepositoryImpl();
