import { usePatchLectureStatusMutation } from "@/queries/Lectures/query";
import { CheckInQueryKey } from "@checkin/querykey";
import { CheckinToast } from "@checkin/toast";
import { LectureStatusType } from "@checkin/types";
import { useState } from "react";
import { useQueryClient } from "react-query";

const useManageLecture = (grade: number) => {
  const queryClient = useQueryClient();

  const patchLectureStatusMutation = usePatchLectureStatusMutation();

  const [lectureIdList, setLectureIdList] = useState<number[]>([]);
  const [lectureStatus, setLectureStatus] = useState<
    LectureStatusType | string
  >("");

  const onChangeLectureIdList = (id: number) => {
    if (lectureIdList.includes(id)) {
      setLectureIdList(lectureIdList.filter((item) => item !== id));
    } else {
      setLectureIdList((prev) => [...prev, id]);
    }
  };

  const onChangeLectureStatus = (status: string) => {
    setLectureStatus(status);
  };

  const onPatchLectureStatus = (lectureStatus: LectureStatusType | string) => {
    patchLectureStatusMutation.mutate(
      { ids: lectureIdList, lectureStatus: lectureStatus },
      {
        onSuccess: () => {
          CheckinToast.showSuccess("강좌 상태 수정 변경");
          setLectureIdList([]);
          queryClient.invalidateQueries(CheckInQueryKey.lecture.getAll(grade));
        },
        onError: () => {
          CheckinToast.showError("강좌 상태 수정 실패");
        },
      }
    );
  };
  return {
    lectureIdList,
    onChangeLectureStatus,
    onChangeLectureIdList,
    onPatchLectureStatus,
  };
};

export default useManageLecture;
