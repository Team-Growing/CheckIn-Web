import { QuestionType } from "@checkin/types";

export interface QuestionRepository {
  questionTeacher({
    content,
    title,
  }: WriteQuestionParam): Promise<QuestionType>;
}

export interface WriteQuestionParam {
  title: string;
  content: string;
}
