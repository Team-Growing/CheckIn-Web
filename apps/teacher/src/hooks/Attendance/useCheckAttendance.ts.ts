import { useGetAttendanceMutation } from "@/queries/AttendanceCode/query";
import { CheckinToast } from "@checkin/toast";
import { ChangeEvent, useCallback, useState } from "react";
import { useQueryClient } from "react-query";

const useCheckAttendance = () => {
  const queryClient = useQueryClient();

  const getAttendanceMutation = useGetAttendanceMutation();

  const [attendanceData, setAttendanceData] = useState({
    lectureId: 9,
    memberId: "",
  });

  const onClickAttendanceData = (e: ChangeEvent<HTMLInputElement>) => {
    async function reflectdata() {
      const { value, name } = e.target;
      setAttendanceData({ ...attendanceData, memberId: value });
      await getAttendanceMutation.mutate(
        {
          lectureId: attendanceData.lectureId,
          memberId: attendanceData.memberId,
        },
        {
          onSuccess: () => {
            CheckinToast.showSuccess("문의 생성 성공");
            setAttendanceData({ lectureId: 9, memberId: "" });
          },
          onError: () => {
            CheckinToast.showError("실패");
          },
        }
      );
    }
  };
  const onSubmitAttendanceData = () => {};
  return {
    attendanceData,
    onClickAttendanceData,
    onSubmitAttendanceData,
  };
};

export default useCheckAttendance;
