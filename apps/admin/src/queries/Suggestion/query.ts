import { GetSuggestionsParam } from "@/repositories/SuggestionRepository/SuggestionRepository";
import SuggestionRepositoryImpl from "@/repositories/SuggestionRepository/SuggestionRepositoryImpl";
import { useQuery } from "react-query";

export const useGetSuggestionsQuery = ({ limit, page }: GetSuggestionsParam) =>
  useQuery(
    ["suggestion/getSuggestions", page],
    () => SuggestionRepositoryImpl.getSuggestions({ limit, page }),
    {
      keepPreviousData: true,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );
