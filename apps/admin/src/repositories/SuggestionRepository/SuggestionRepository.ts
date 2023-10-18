import { SuggestionResponse } from "@checkin/types";

export interface SuggestionRepository {
  getSuggestions(param: GetSuggestionsParam): Promise<SuggestionResponse>;
}

export interface GetSuggestionsParam {
  page: number;
  limit: number;
}
