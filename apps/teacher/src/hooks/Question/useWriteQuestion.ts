import { useWriteQuestionMutation } from "@/queries/Question/query";
import { CheckinToast } from "@checkin/toast";
import { ChangeEvent, useCallback, useState } from "react";
import { useQueryClient } from "react-query";

const useWriteQuestion = () => {
  const queryClient = useQueryClient();

  const writeNoticeMutation = useWriteQuestionMutation();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitleData = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  };

  const onChangeContentData = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setContent(value);
  };

  const onSubmitQuestionData = () => {
    writeNoticeMutation.mutate(
      {
        title: title,
        content: content,
      },
      {
        onSuccess: () => {
          CheckinToast.showSuccess("문의 생성 성공");
          setTitle("");
          setContent("");
          queryClient.invalidateQueries("/question");
          console.log("hi");
        },
        onError: () => {
          CheckinToast.showError("실패");
        },
      }
    );
  };

  return {
    title,
    content,
    onChangeTitleData,
    onChangeContentData,
    onSubmitQuestionData,
  };
};

export default useWriteQuestion;
