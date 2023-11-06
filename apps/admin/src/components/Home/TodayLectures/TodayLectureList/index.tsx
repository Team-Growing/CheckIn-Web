import React from "react";
import { LectureBox } from "@checkin/ui";
import { LectureListWrapper } from "./style";
import { LecturesResponse } from "@checkin/types";

interface Props {
  data: LecturesResponse;
}

const TodayLecturesList = ({ data }: Props) => {
  return (
    <div style={{ overflowX: "auto" }}>
      <LectureListWrapper>
        <div style={{ display: "flex", columnGap: "20px" }}>
          {data.data.map((data) => (
            <LectureBox
              key={data.lectureId.value}
              grade={data.acceptableStudent.targetGrade}
              lectureTag={data.lectureTag}
              people={data.enrollStudent}
              place={data.placeType}
              teacher={data.lectureTeacher.name}
              title={data.lectureName}
            />
          ))}
        </div>
      </LectureListWrapper>
    </div>
  );
};

export default TodayLecturesList;
