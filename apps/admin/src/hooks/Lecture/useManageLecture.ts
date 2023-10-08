import { usePatchLectureStatusMutation } from "@/queries/Lecture/query";
import { PatchLectureStatusParam } from "@/repositories/LectureRepository/LectureRepository";
import { CheckinToast } from "@checkin/toast";
import { useState } from "react";
import { useQueryClient } from "react-query";

const useManageLecture = () => {
  const queryClient = useQueryClient();

  const patchLectureStatusMutation = usePatchLectureStatusMutation();

  const [lectures, setLectures] = useState<PatchLectureStatusParam>({
    lectureId: 0,
    lectureStatus: "",
  });

  const onChangeSetLectures = ({
    lectureId,
    lectureStatus,
  }: PatchLectureStatusParam) => {
    setLectures((prev) => ({ ...prev, lectureId, lectureStatus }));
  };

  const onPatchLectureStatus = () => {
    patchLectureStatusMutation.mutate(
      { lectureId: 1, lectureStatus: "COURSE_PERIOD" },
      {
        onSuccess: () => {
          CheckinToast.showSuccess("강좌 상태 수정 변경");
        },
        onError: () => {
          CheckinToast.showError("강좌 상태 수정 실패");
        },
      }
    );
  };
  return {};
};

export default useManageLecture;
