import { useGetAttendanceMutation } from "@/queries/AttendanceCode/query";
import { CheckinToast } from "@checkin/toast";
import { ChangeEvent, useCallback, useState } from "react";
import { useQueryClient } from "react-query";

const useWriteQuestion = () => {
  const queryClient = useQueryClient();
  const getAttendanceMutation = useGetAttendanceMutation();

  const [attendanceData, setAttendanceData] = useState({
    lectureId: "",
    memberId: "",
  });

  const onSubmitQuestionData = () => {
    getAttendanceMutation.mutate(
      {
        lectureId: "1",
        memberId: "1",
      },
      {
        onSuccess: () => {
          CheckinToast.showSuccess("문의 생성 성공");
          setAttendanceData({ lectureId: "", memberId: "" });
        },
        onError: () => {
          CheckinToast.showError("실패");
        },
      }
    );
  };

  return {
    attendanceData,
    onSubmitQuestionData,
  };
};

export default useWriteQuestion;
