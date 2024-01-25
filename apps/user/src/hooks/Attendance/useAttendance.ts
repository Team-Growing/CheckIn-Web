"use client";

import { useAttendanceLectureMutation } from "@/queries/Attendance/query";
import { CheckinToast } from "@checkin/toast";
import { ChangeEvent, FormEvent, useState } from "react";

const useAttendance = () => {
  const [attendanceCode, setAttendacneCode] = useState("");
  const [lectureId, setLectureId] = useState(0);

  const attendanceLectureMutation = useAttendanceLectureMutation();

  const onClickSetId = (value: number) => {
    setLectureId(value);
  };

  const onChangeAttendanceCode = (e: ChangeEvent<HTMLInputElement>) => {
    setAttendacneCode(e.target.value);
  };

  const onAttendanceLecture = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const stringLectureId = String(lectureId);
    attendanceLectureMutation.mutate(
      { lectureId: stringLectureId, code: attendanceCode },
      {
        onSuccess: () => {
          CheckinToast.showSuccess("출석체크 성공");
          setAttendacneCode("");
        },
        onError: () => {
          CheckinToast.showError("출석체크 실패");
          setAttendacneCode("");
        },
      }
    );
  };

  return {
    attendanceCode,
    lectureId,
    onClickSetId,
    onChangeAttendanceCode,
    onAttendanceLecture,
  };
};

export default useAttendance;
