export type QuestionStatus = "CONFIRMED" | "NOT_CONFIRMED";

export interface QuestionReponse {
  data: {
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
  };
}

export interface QuestionsResponse {
  data: {
    totalCount: number;
    value: QuestionReponse[];
  };
}
