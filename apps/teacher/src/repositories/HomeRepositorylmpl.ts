import { Lectures, LecturesResponse, Response } from "@checkin/types";
import {
  AttendLectureParam,
  LectureRepository,
  enroLectureByIdParam,
  getLectureByIdParam,
} from "./HomeRepository";
import apiClient from "@/libs/Auth/customAxios";

class LectureRepositoryImpl implements LectureRepository {
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
}

export default new LectureRepositoryImpl();
