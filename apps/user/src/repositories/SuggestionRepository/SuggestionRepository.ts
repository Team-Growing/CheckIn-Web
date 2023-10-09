import { Response, SuggestonType } from "@checkin/types";

export interface SuggestionRepository {
  postSuggestion(param: PostSuggestionParam): Promise<Response>;
}

export interface PostSuggestionParam extends SuggestonType {}
