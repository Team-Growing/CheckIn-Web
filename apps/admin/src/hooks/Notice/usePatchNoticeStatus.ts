import { usePatchNoticeStatusMutation } from "@/queries/Notice/query";
import { CheckInQueryKey } from "@checkin/querykey";
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
          queryClient.invalidateQueries(CheckInQueryKey.notice.getAll);
        },
        onError: () => {
          CheckinToast.showError("error...");
        },
      }
    );
  };

  return { noticeStatus, setNoticeStatus, onPatchNoticeStatus };
};

export default usePatchNoticeStatus;
