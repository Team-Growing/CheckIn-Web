import { QuestionType } from "@checkin/types";

export interface QuestionRepository {
  questionTeacher({ content }: writeQuestionParam): Promise<QuestionType>;
}

export interface writeQuestionParam {
  title: string;
  content: string;
}
