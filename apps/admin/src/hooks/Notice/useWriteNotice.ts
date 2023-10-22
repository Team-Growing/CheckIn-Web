import { useWriteNoticeMutation } from "@/queries/Notice/query";
import { CheckinToast } from "@checkin/toast";
import { ChangeEvent, useState } from "react";
import { useQueryClient } from "react-query";

const useWriteNotice = () => {
  const queryClient = useQueryClient();

  const writeNoticeMutation = useWriteNoticeMutation();

  const [notice, setNotice] = useState("");

  const onChangeNoticeData = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNotice(value);
  };

  const onSubmitNoticeData = () => {
    writeNoticeMutation.mutate(
      {
        content: notice,
      },
      {
        onSuccess: () => {
          CheckinToast.showSuccess("공지 생성 성공");
          setNotice("");
          queryClient.invalidateQueries("notice/allNotice");
        },
        onError: () => {
          CheckinToast.showError("실패");
        },
      }
    );
  };

  return { notice, onChangeNoticeData, onSubmitNoticeData };
};

export default useWriteNotice;
