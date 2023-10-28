import { GetSuggestionsParam } from "@/repositories/SuggestionRepository/SuggestionRepository";
import SuggestionRepositoryImpl from "@/repositories/SuggestionRepository/SuggestionRepositoryImpl";
import { CheckInQueryKey } from "@checkin/querykey";
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

export const useGetSuggestionQuery = (id: number) =>
  useQuery({
    queryKey: CheckInQueryKey.suggestion.getSuggestion(id),
    queryFn: () => SuggestionRepositoryImpl.getSuggestion(id),
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });
