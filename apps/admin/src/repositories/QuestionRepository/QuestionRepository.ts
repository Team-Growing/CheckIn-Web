import { QuestionsResponse } from "@checkin/types";

export interface QuestionRepository {
  getQuestions(param: GetQuestionsParam): Promise<QuestionsResponse>;
  getQuestion(id: number): Promise<QuestionRepository>;
}

export interface GetQuestionsParam {
  page: number;
  limit: number;
}
