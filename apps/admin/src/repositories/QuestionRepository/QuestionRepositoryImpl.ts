import { QuestionReponse, QuestionsResponse } from "@checkin/types";
import { GetQuestionsParam, QuestionRepository } from "./QuestionRepository";
import apiClient from "@/libs/Auth/customAxios";

class QuestionRepositoryImpl implements QuestionRepository {
  public async getQuestion(id: number): Promise<QuestionReponse> {
    const { data } = await apiClient.get(`/question/${id}`);
    return data;
  }
  public async getQuestions({
    limit,
    page,
  }: GetQuestionsParam): Promise<QuestionsResponse> {
    const { data } = await apiClient.get(
      `/question/all?page=${page}&limit=${limit}`
    );
    return data;
  }
}

export default new QuestionRepositoryImpl();
