import { usePostSuggestionMutation } from "@/queries/Suggestion/query";
import { CheckinToast } from "@checkin/toast";
import { dataTransform } from "@checkin/util";
import { ChangeEvent, FormEvent, useState } from "react";
import { useQueryClient } from "react-query";

const useSuggestionLecture = () => {
  const queryClient = useQueryClient();

  const postSuggestionMutation = usePostSuggestionMutation();

  const [suggestionData, setSuggestionData] = useState({
    name: "",
    content: "",
    dayOfWeek: "",
    additional: "",
  });

  const onChangeSuggestionData = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setSuggestionData((prev) => ({ ...prev, [name]: value }));
  };

  const onSetDayOfWeek = (name: string, value: string) => {
    setSuggestionData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitSuggestion = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { additional, content, dayOfWeek, name } = suggestionData;
    postSuggestionMutation.mutate(
      {
        name: name,
        additional: additional,
        content: content,
        dayOfWeek: dataTransform.submitTransformDayofWeek(dayOfWeek)!,
      },
      {
        onSuccess: () => {
          CheckinToast.showSuccess("방과후 제안 성공");
          queryClient.invalidateQueries("suggestion/getSuggestion");
          setSuggestionData({
            additional: "",
            content: "",
            dayOfWeek: "",
            name: "",
          });
        },
        onError: () => {
          CheckinToast.showError("방과후 제안 실패");
        },
      }
    );
  };

  return {
    suggestionData,
    onSetDayOfWeek,
    onChangeSuggestionData,
    onSubmitSuggestion,
  };
};

export default useSuggestionLecture;
