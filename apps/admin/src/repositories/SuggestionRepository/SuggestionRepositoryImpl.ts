import { SuggestionResponse } from "@checkin/types";
import {
  GetSuggestionsParam,
  SuggestionRepository,
} from "./SuggestionRepository";
import apiClient from "@/libs/Auth/customAxios";

class SuggestionRepositoryImpl implements SuggestionRepository {
  public async getSuggestions({
    limit,
    page,
  }: GetSuggestionsParam): Promise<SuggestionResponse> {
    const { data } = await apiClient.get(
      `/suggestion?page=${page}&limit=${limit}`
    );
    return data;
  }
}

export default new SuggestionRepositoryImpl();
