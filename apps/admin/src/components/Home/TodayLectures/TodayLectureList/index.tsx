import React from "react";
import { LectureBox } from "@checkin/ui";
import { LectureListWrapper } from "./style";

const TodayLecturesList = () => {
  return (
    <LectureListWrapper>
      {Array.from({ length: 10 }).map((idx, d) => (
        <LectureBox
          lectureTag="SPORTS"
          grade="2"
          people="10"
          place="PLAYGROUND"
          teacher="백승하"
          title="야구"
          key={d}
        />
      ))}
    </LectureListWrapper>
  );
};

export default TodayLecturesList;
