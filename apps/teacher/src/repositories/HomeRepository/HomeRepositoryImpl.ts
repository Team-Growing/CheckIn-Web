import {
  AttendanceCode,
  Lectures,
  LecturesResponse,
  Response,
} from "@checkin/types";
import {
  AttendLectureParam,
  HomeRepository,
  enroLectureByIdParam,
  getLectureByIdParam,
} from "./HomeRepository";
import apiClient from "@/libs/Auth/customAxios";
import { promises } from "dns";

class HomeRepositoryImpl implements HomeRepository {
  public async enrolLecture(id: enroLectureByIdParam): Promise<Response> {
    const { data } = await apiClient.post(`/enrol/${id}`);
    return data;
  }

  public async getLectureById(id: getLectureByIdParam): Promise<Lectures> {
    const { data } = await apiClient.get(`/lecture/${id}`);
    return data;
  }

  public async getTodayLecture(): Promise<LecturesResponse> {
    const { data } = await apiClient.get("/lecture/today");
    return data;
  }

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

export default new HomeRepositoryImpl();
