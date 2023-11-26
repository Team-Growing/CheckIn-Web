import React from "react";
import * as S from "./style";
import { EnrolLectureBox } from "@checkin/ui";
import { LecturesResponse } from "@checkin/types";

interface Props {
  data: LecturesResponse;
  lectureId: number;
  onClickSetId: (value: number) => void;
}

const AttendList = ({ data, lectureId, onClickSetId }: Props) => {
  return (
    <S.EnrolLectureListContainer>
      {data?.data.map((data) => (
        <EnrolLectureBox
          isSelect={lectureId === data.lectureId.value ? true : false}
          onClick={() => onClickSetId(data.lectureId.value)}
          lectureTag={data.lectureTag}
          grade={String(data.acceptableStudent.targetGrade)}
          people={String(data.acceptableStudent.maxStudent)}
          place={data.placeType}
          title={data.lectureName}
          key={data.lectureId.value}
        />
      ))}
    </S.EnrolLectureListContainer>
  );
};

export default AttendList;
