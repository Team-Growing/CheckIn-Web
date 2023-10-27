import { QuestionType } from "@checkin/types";
import { QuestionRepository, writeQuestionParam } from "./QuestionRepository";
import apiClient from "@/libs/Auth/customAxios";

class QuestionRepositoryImpl implements QuestionRepository {
  public async questionTeacher({
    content,
  }: writeQuestionParam): Promise<QuestionType> {
    const { data } = await apiClient.post("/question", { content });
    return data;
  }
}

export default new QuestionRepositoryImpl();
