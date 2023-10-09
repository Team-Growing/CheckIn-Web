import SuggestionRepositoryImpl from "@/repositories/SuggestionRepository/SuggestionRepositoryImpl";
import { useMutation } from "react-query";

export const usePostSuggestionMutation = () => {
  const mutation = useMutation(SuggestionRepositoryImpl.postSuggestion);
  return mutation;
};
