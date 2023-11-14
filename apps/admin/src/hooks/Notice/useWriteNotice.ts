import { useWriteNoticeMutation } from "@/queries/Notice/query";
import { CheckInQueryKey } from "@checkin/querykey";
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
          CheckinToast.showSuccess("공지가 생성 되었습니다.");
          setNotice("");
          queryClient.invalidateQueries(CheckInQueryKey.notice.getAll);
        },
        onError: () => {
          CheckinToast.showError("error");
        },
      }
    );
  };

  return { notice, onChangeNoticeData, onSubmitNoticeData };
};

export default useWriteNotice;
