import {
  useDeleteCancelAttendanceMutation,
  usePostConfirmAttendanceMutation,
} from "@/queries/AttendanceCode/query";
import { ChangeAttendanceStatusParam } from "@/repositories/AttendanceRepository/AttendanceRepository";
import { CheckInQueryKey } from "@checkin/querykey";
import { CheckinToast } from "@checkin/toast";
import React from "react";
import { useQueryClient } from "react-query";

const useChangeAttendanceStatus = () => {
  const queryClient = useQueryClient();
  const postConfirmAttendanceMutation = usePostConfirmAttendanceMutation();
  const deleteCancelAttendanceMutation = useDeleteCancelAttendanceMutation();

  const onChangeAttendanceStatusCancel = ({
    lectureId,
    memberId,
  }: ChangeAttendanceStatusParam) => {
    deleteCancelAttendanceMutation.mutate(
      { lectureId, memberId },
      {
        onSuccess: () => {
          CheckinToast.showSuccess("출석처리 하였습니다");
          queryClient.invalidateQueries(
            CheckInQueryKey.attendance.getAttendacneList(lectureId)
          );
        },
        onError: () => {
          CheckinToast.showError("출석 처리 실패");
        },
      }
    );
  };

  const onChangeAttendanceStatusConfirm = ({
    lectureId,
    memberId,
  }: ChangeAttendanceStatusParam) => {
    postConfirmAttendanceMutation.mutate(
      { lectureId, memberId },
      {
        onSuccess: () => {
          CheckinToast.showSuccess("출석 취소 되었습니다");
          queryClient.invalidateQueries(
            CheckInQueryKey.attendance.getAttendacneList(lectureId)
          );
        },
        onError: () => {
          CheckinToast.showError("에러");
        },
      }
    );
  };

  return { onChangeAttendanceStatusConfirm, onChangeAttendanceStatusCancel };
};

export default useChangeAttendanceStatus;
