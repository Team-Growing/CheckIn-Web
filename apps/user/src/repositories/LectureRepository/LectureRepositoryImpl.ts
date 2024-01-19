import {
  Lectures,
  LecturesResponse,
  MemberLecturesResponse,
  Response,
} from "@checkin/types";
import {
  LectureRepository,
  enroLectureByIdParam,
  getLectureByIdParam,
} from "./LectureRepository";
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

  public async getMyLectures(): Promise<MemberLecturesResponse> {
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

  public async getMemberLectures(): Promise<LecturesResponse> {
    const { data } = await apiClient.get("/lecture/my");
    return data;
  }
}

export default new LectureRepositoryImpl();
