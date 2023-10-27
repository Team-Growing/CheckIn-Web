import { useWriteQuestionMutation } from "@/queries/Question/query";
import { CheckinToast } from "@checkin/toast";
import { ChangeEvent, useCallback, useState } from "react";
import { useQueryClient } from "react-query";

const useWriteQuestion = () => {
  const queryClient = useQueryClient();

  const writeNoticeMutation = useWriteQuestionMutation();

  const [questionData, setQuestionData] = useState({ title: "", content: "" });

  const onChangeQuestionData = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setQuestionData({ ...questionData, [name]: value });
  };

  const onSubmitQuestionData = () => {
    writeNoticeMutation.mutate(
      {
        title: questionData.title,
        content: questionData.content,
      },
      {
        onSuccess: () => {
          CheckinToast.showSuccess("문의 생성 성공");
          setQuestionData({ title: "", content: "" });
        },
        onError: () => {
          CheckinToast.showError("실패");
        },
      }
    );
  };

  return {
    questionData,
    onChangeQuestionData,
    onSubmitQuestionData,
  };
};

export default useWriteQuestion;
