"use client";

import { useApplyAbsenceMutation } from "@/queries/Absence/query";
import { useGetTodayMyLecturesQuery } from "@/queries/Lectures/query";
import { CheckInQueryKey } from "@checkin/querykey";
import { CheckinToast } from "@checkin/toast";
import { ChangeEvent, FormEvent, useState } from "react";
import { useQueryClient } from "react-query";

const useApplyAbsence = () => {
  const queryClient = useQueryClient();

  const applyAbsenceMutation = useApplyAbsenceMutation();

  const myLectures = useGetTodayMyLecturesQuery().data?.data!;

  const [lectureName, setLectureName] = useState("");

  const [applyAbsenceData, setApplyAbsenceData] = useState({
    lectureId: 0,
    reason: "",
  });

  const onSetLectureId = (name: string, value: string) => {
    setLectureName(value);
    const lectureId = myLectures.find(
      (lectures) => lectures.lectureName === value
    )?.lectureId.value!;

    setApplyAbsenceData((prev) => ({ ...prev, [name]: lectureId }));
  };

  const onSetReason = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value: reason } = e.target;
    setApplyAbsenceData((prev) => ({ ...prev, reason: reason }));
  };

  const onSubmitApplyAbsenceData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    applyAbsenceMutation.mutate(applyAbsenceData, {
      onSuccess: () => {
        CheckinToast.showSuccess("결강 신청 성공 선생님의 승인을 기다려주세요");
        queryClient.invalidateQueries(CheckInQueryKey.absence.getMy);
        setLectureName("");
        setApplyAbsenceData({ lectureId: 0, reason: "" });
      },
      onError: () => {
        CheckinToast.showError("서버 에러");
      },
    });
  };

  return {
    myLectures,
    lectureName,
    applyAbsenceData,
    onSetLectureId,
    onSetReason,
    onSubmitApplyAbsenceData,
  };
};

export default useApplyAbsence;
