import { usePatchNoticeStatusMutation } from "@/queries/Notice/query";
import { CheckinToast } from "@checkin/toast";
import { useBooleanState } from "@checkin/util";
import { useState } from "react";
import { useQueryClient } from "react-query";

interface Props {
  id: number;
  status: "ACTIVE" | "DEACTIVATED";
}

const usePatchNoticeStatus = ({ id, status }: Props) => {
  const pathNoticeStatusMutation = usePatchNoticeStatusMutation();
  const queryClient = useQueryClient();

  const {
    toggle,
    value: noticeStatus,
    setValue: setNoticeStatus,
  } = useBooleanState();

  setNoticeStatus(status === "ACTIVE" ? true : false);

  const onChangeStatus = () => {
    toggle();
  };

  const onPatchNoticeStatus = () => {
    pathNoticeStatusMutation.mutate(
      {
        id: String(id),
        noticeStatus: noticeStatus ? "ACTIVE" : "DEACTIVATED",
      },
      {
        onSuccess: () => {
          CheckinToast.showSuccess("성공");
          queryClient.invalidateQueries("notice/allNotice");
        },
        onError: () => {
          CheckinToast.showError("성공");
        },
      }
    );
  };

  return { noticeStatus, setNoticeStatus, onChangeStatus };
};

export default usePatchNoticeStatus;
