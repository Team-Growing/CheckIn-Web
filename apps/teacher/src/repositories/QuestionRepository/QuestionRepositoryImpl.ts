import { QuestionType } from "@checkin/types";
import { QuestionRepository, writeQuestionParam } from "./QuestionRepository";
import apiClient from "@/libs/Auth/customAxios";

class QuestionRepositoryImpl implements QuestionRepository {
  public async questionTeacher({
    content,
    title,
  }: writeQuestionParam): Promise<QuestionType> {
    const { data } = await apiClient.post("/question", { title, content });
    return data;
  }
}

export default new QuestionRepositoryImpl();
