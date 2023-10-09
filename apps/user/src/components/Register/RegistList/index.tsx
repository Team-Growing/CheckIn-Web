import React from "react";
import { ItemContainer } from "./style";
import { LectureTagBox } from "@checkin/ui";
import { useGetEnrolmentLecturesQuery } from "@/queries/Lectures/query";
import { useEnrolLectureByIdMutation } from "@/queries/Enrol/query";
import { CheckinToast } from "@checkin/toast";

interface Props {
  grade: number;
}

const RegistList = ({ grade }: Props) => {
  const { data } = useGetEnrolmentLecturesQuery(grade);
  const enrolLectureByIdMutation = useEnrolLectureByIdMutation();

  return (
    <ItemContainer>
      {data?.data.map((data) => {
        return (
          <>
            <LectureTagBox
              lectureTag={data.lectureTag}
              type="Enrol"
              grade={String(data.acceptableStudent.targetGrade)}
              people={String(data.enrollStudent)}
              place={data.placeType}
              teacher={data.lectureTeacher.teacherId.value}
              title={data.lectureName}
              onClick={() =>
                enrolLectureByIdMutation.mutate(data.lectureId.value, {
                  onSuccess: () => {
                    CheckinToast.showSuccess(
                      `${data.lectureName} 수강 신청 성공`
                    );
                  },
                  onError: () => {
                    CheckinToast.showError("방과후 수강 신청 실패");
                  },
                })
              }
            />
          </>
        );
      })}
    </ItemContainer>
  );
};

export default RegistList;
