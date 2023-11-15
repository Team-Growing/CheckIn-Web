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
      {data?.data.length === 0 && <div>수강 신청 기간이 아닙니다</div>}
      {data?.data.map((data) => {
        return (
          <LectureTagBox
            key={data.lectureId.value}
            lectureTag={data.lectureTag}
            type="Enrol"
            grade={data.acceptableStudent.targetGrade}
            people={data.enrollStudent}
            place={data.placeType}
            teacher={data.lectureTeacher.name}
            title={data.lectureName}
            onClick={() =>
              enrolLectureByIdMutation.mutate(data.lectureId.value, {
                onSuccess: () => {
                  CheckinToast.showSuccess(
                    `${data.lectureName} 수강 신청 성공`
                  );
                },
                onError: (data: any) => {
                  CheckinToast.showError(data.response.data.message);
                },
              })
            }
          />
        );
      })}
    </ItemContainer>
  );
};

export default RegistList;
