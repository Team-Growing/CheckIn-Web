import {
  AttendanceCode,
  Lectures,
  LecturesResponse,
  Response,
} from "@checkin/types";
import {
  AttendLectureParam,
  AttendRepository,
  enroLectureByIdParam,
  getLectureByIdParam,
} from "./AttendRepository";
import apiClient from "@/libs/Auth/customAxios";
import { promises } from "dns";

class AttendRepositoryImpl implements AttendRepository {
  public async attendanceLecture({
    code,
    lectureId,
  }: AttendLectureParam): Promise<Response> {
    const { data } = await apiClient.post(`/attendance/${lectureId}`, { code });
    return data;
  }

  public async getCode(): Promise<AttendanceCode> {
    const { data } = await apiClient.get(`/attendance/code/1`);
    return data;
  }
}

export default new AttendRepositoryImpl();
