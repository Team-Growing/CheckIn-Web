import { Suggestion, SuggestionResponse } from "@checkin/types";

export interface SuggestionRepository {
  getSuggestions(param: GetSuggestionsParam): Promise<SuggestionResponse>;
  getSuggestion(id: number): Promise<Suggestion>;
}

export interface GetSuggestionsParam {
  page: number;
  limit: number;
}
