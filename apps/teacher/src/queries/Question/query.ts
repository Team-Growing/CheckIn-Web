import QuestionRepositoryImpl from "@/repositories/QuestionRepository/QuestionRepositoryImpl";
import { useMutation, useQuery } from "react-query";

export const useWriteQuestionMutation = () => {
  const mutation = useMutation(QuestionRepositoryImpl.questionTeacher);
  return mutation;
};
