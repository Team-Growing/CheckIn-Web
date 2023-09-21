import React from "react";
import { LectureBox } from "@checkin/ui";
import { LectureListWrapper } from "./style";
import { LecturesResponse } from "@checkin/types";
import dataTransform from "@checkin/uitl/util/dataTransform";

interface Props {
  data: LecturesResponse;
}

const TodayLaectureList = ({ data }: Props) => {
  console.log(data.data);

  return (
    <LectureListWrapper>
      {data.data.map((data, idx) => (
        <LectureBox
          key={idx}
          lectureTag={data.lectureTag}
          grade={String(data.acceptableStudent.targetGrade)}
          people={String(data.enrollStudent)}
          place={data.placeType}
          teacher={data.lectureTeacher.name}
          title={data.lectureName}
        />
      ))}
    </LectureListWrapper>
  );
};

export default TodayLaectureList;
