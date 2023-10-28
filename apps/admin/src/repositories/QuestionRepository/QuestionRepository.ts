import { QuestionReponse, QuestionsResponse } from "@checkin/types";

export interface QuestionRepository {
  getQuestions(param: GetQuestionsParam): Promise<QuestionsResponse>;
  getQuestion(id: number): Promise<QuestionReponse>;
}

export interface GetQuestionsParam {
  page: number;
  limit: number;
}
