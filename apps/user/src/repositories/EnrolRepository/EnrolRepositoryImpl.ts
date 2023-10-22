import apiClient from "@/libs/Auth/customAxios";
import { Response } from "@checkin/types";
import { EnrolRepository } from "./EnrolRepository";

class EnrolRepositoryImpl implements EnrolRepository {
  public async enrolLectureById(lectureId: number): Promise<Response> {
    const { data } = await apiClient.post(`/enrol/${lectureId}`);
    return data;
  }
}
export default new EnrolRepositoryImpl();
