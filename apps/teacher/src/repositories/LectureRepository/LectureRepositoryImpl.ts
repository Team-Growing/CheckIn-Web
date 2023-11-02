import { Lectures, LecturesResponse, Response } from "@checkin/types";
import { LectureRepository } from "./LectureRepository";
import apiClient from "@/libs/Auth/customAxios";

class LectureRepositoryImpl implements LectureRepository {
  public async enrolLecture(id: number): Promise<Response> {
    const { data } = await apiClient.post(`/enrol/${id}`);
    return data;
  }

  public async getLectureById(id: number): Promise<Lectures> {
    const { data } = await apiClient.get(`/lecture/${id}`);
    return data;
  }

  public async getTodayLecture(): Promise<LecturesResponse> {
    const { data } = await apiClient.get("/lecture/today");
    return data;
  }

  public async getMyLectures(): Promise<LecturesResponse> {
    const { data } = await apiClient.get("/lecture/my");
    return data;
  }

  public async getEnrolmentLectures(grade: number): Promise<LecturesResponse> {
    const { data } = await apiClient.get(
      `/lecture?status=ENROLMENT&grade=${grade}`
    );
    return data;
  }

  public async getTodayMyLectures(): Promise<LecturesResponse> {
    const { data } = await apiClient.get("/lecture/my/today");
    return data;
  }
}

export default new LectureRepositoryImpl();
