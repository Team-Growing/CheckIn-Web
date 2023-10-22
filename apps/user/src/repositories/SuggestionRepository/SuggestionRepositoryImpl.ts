import { Response } from "@checkin/types";
import {
  PostSuggestionParam,
  SuggestionRepository,
} from "./SuggestionRepository";
import apiClient from "@/libs/Auth/customAxios";

class SuggestoinRepositoryImpl implements SuggestionRepository {
  public async postSuggestion(param: PostSuggestionParam): Promise<Response> {
    const { data } = await apiClient.post("/suggestion", param);
    return data;
  }
}

export default new SuggestoinRepositoryImpl();
