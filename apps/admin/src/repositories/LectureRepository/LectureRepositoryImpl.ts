import { Lectures, Response } from "@checkin/types";
import { LectureRepository } from "./LectureRepository";
import apiClient from "@/libs/Auth/customAxios";

class LectureRepositoryImpl implements LectureRepository {
  public async postLecture(params: Lectures): Promise<Response> {
    const { data } = await apiClient.post("/lecture", params);
    return data;
  }
}

export default new LectureRepositoryImpl();
