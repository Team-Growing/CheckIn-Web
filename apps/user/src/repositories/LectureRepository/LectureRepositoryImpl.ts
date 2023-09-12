import { Response } from "@checkin/types";
import {
  GetLecturesParam,
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

  public async getLectures(params: GetLecturesParam): Promise<Response> {
    const { data } = await apiClient.post("/lecture", params);
    return data;
  }

  public async getLectureById(id: getLectureByIdParam): Promise<Response> {
    const { data } = await apiClient.get(`/lecture/${id}`);
    return data;
  }
}

export default new LectureRepositoryImpl();
