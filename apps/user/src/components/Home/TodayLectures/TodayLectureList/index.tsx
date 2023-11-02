import React from "react";
import { LectureBox } from "@checkin/ui";
import { LectureListWrapper } from "./style";
import { LecturesResponse } from "@checkin/types";

interface Props {
  data: LecturesResponse;
}

const TodayLaectureList = ({ data }: Props) => {
  return (
    <LectureListWrapper>
      {data.data.map((data, idx) => (
        <LectureBox
          key={idx}
          lectureTag={data.lectureTag}
          grade={data.acceptableStudent.targetGrade}
          people={data.enrollStudent}
          place={data.placeType}
          teacher={data.lectureTeacher.name}
          title={data.lectureName}
        />
      ))}
    </LectureListWrapper>
  );
};

export default TodayLaectureList;
