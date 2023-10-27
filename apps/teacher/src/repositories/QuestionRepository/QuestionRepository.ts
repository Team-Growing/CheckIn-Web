import { QuestionType } from "@checkin/types";

export interface QuestionRepository {
  questionTeacher({
    content,
    title,
  }: writeQuestionParam): Promise<QuestionType>;
}

export interface writeQuestionParam {
  title: string;
  content: string;
}
