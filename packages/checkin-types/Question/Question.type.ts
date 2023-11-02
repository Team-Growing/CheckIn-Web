export type QuestionStatus = "CONFIRMED" | "NOT_CONFIRMED";

export interface QuestionReponse {
  data: Question;
}

export interface Question {
  questionId: {
    value: number;
  };
  questionStatus: QuestionStatus | string;
  title: string;
  content: string;
  createdAt: string;
  questioner: {
    memberId: {
      value: string;
    };
    name: string;
  };
}

export interface QuestionsResponse {
  data: {
    totalCount: number;
    value: Question[];
  };
  nextPage: number;
}

export interface QuestionType {
  title: string;
  content: string;
}
