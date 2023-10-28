import { usePatchNoticeStatusMutation } from "@/queries/Notice/query";
import { CheckinToast } from "@checkin/toast";
import { useBooleanState } from "@checkin/util";
import { useEffect } from "react";
import { useQueryClient } from "react-query";

interface Props {
  id: number;
  status: string;
}

const usePatchNoticeStatus = ({ id, status }: Props) => {
  const pathNoticeStatusMutation = usePatchNoticeStatusMutation();
  const queryClient = useQueryClient();

  const {
    toggle,
    value: noticeStatus,
    setValue: setNoticeStatus,
  } = useBooleanState();

  useEffect(() => {
    setNoticeStatus(status === "ACTIVE" ? true : false);
  }, []);

  const onPatchNoticeStatus = () => {
    setNoticeStatus((prev) => !prev);

    pathNoticeStatusMutation.mutate(
      {
        id: String(id),
        noticeStatus: noticeStatus ? "DEACTIVATED" : "ACTIVE",
      },
      {
        onSuccess: () => {
          CheckinToast.showSuccess("성공");
          queryClient.invalidateQueries("notice/allNotice");
        },
        onError: () => {
          CheckinToast.showError("에러");
        },
      }
    );
  };

  return { noticeStatus, setNoticeStatus, onPatchNoticeStatus };
};

export default usePatchNoticeStatus;
