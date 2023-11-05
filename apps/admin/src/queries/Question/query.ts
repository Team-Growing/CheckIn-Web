import { GetQuestionsParam } from "@/repositories/QuestionRepository/QuestionRepository";
import QuestionRepositoryImpl from "@/repositories/QuestionRepository/QuestionRepositoryImpl";
import { CheckInQueryKey } from "@checkin/querykey";
import { useQuery } from "react-query";

export const useGetQuestionsQuery = ({ limit, page }: GetQuestionsParam) =>
  useQuery(
    CheckInQueryKey.question.getQuestions,
    () => QuestionRepositoryImpl.getQuestions({ limit, page }),
    {
      keepPreviousData: true,
    }
  );

export const useGetQuestionQuery = (id: number) =>
  useQuery("question/getQuestion", () =>
    QuestionRepositoryImpl.getQuestion(id)
  );
