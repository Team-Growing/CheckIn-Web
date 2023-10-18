import { GetQuestionsParam } from "@/repositories/QuestionRepository/QuestionRepository";
import QuestionRepositoryImpl from "@/repositories/QuestionRepository/QuestionRepositoryImpl";
import { useQuery } from "react-query";

export const useGetQuestionsQuery = ({ limit, page }: GetQuestionsParam) =>
  useQuery(
    ["question/getQuestions", page],
    () => QuestionRepositoryImpl.getQuestions({ limit, page }),
    {
      keepPreviousData: true,
    }
  );

export const useGetQuestionQuery = (id: number) =>
  useQuery("question/getQuestion", () =>
    QuestionRepositoryImpl.getQuestion(id)
  );
