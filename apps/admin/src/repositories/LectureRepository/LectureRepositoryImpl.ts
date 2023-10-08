import { Lectures, LecturesResponse, Response } from "@checkin/types";
import {
  LectureRepository,
  PatchLectureStatusParam,
  getLecturesByLectureStatusParam,
} from "./LectureRepository";
import apiClient from "@/libs/Auth/customAxios";

class LectureRepositoryImpl implements LectureRepository {
  public async postLecture(params: Lectures): Promise<Response> {
    const { data } = await apiClient.post("/lecture", params);
    return data;
  }

  public async getLecturesByLectureStatus({
    grade,
    status,
  }: getLecturesByLectureStatusParam): Promise<LecturesResponse> {
    const { data } =
      await apiClient.get(`/lecture?status=${status}&grade=${grade}
      `);
    return data;
  }

  public async patchLectureStatus({
    lectureStatus,
    lectureId,
  }: PatchLectureStatusParam): Promise<Response> {
    const { data } = await apiClient.patch(
      `/lecture/status/${lectureId}`,
      lectureStatus
    );
    return data;
  }
}

export default new LectureRepositoryImpl();
