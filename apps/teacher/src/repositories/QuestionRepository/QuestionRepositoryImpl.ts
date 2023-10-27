import { QuestionType } from "@checkin/types";
import { QuestionRepository, WriteQuestionParam } from "./QuestionRepository";
import apiClient from "@/libs/Auth/customAxios";

class QuestionRepositoryImpl implements QuestionRepository {
  public async questionTeacher({
    content,
    title,
  }: WriteQuestionParam): Promise<QuestionType> {
    const { data } = await apiClient.post("/question", { title, content });
    return data;
  }
}

export default new QuestionRepositoryImpl();
