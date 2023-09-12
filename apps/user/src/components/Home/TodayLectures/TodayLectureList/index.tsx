import React from "react";
import { LectureBox } from "@checkin/ui";
import { LectureListWrapper } from "./style";

const TodayLaectureList = () => {
  return (
    <LectureListWrapper>
      {Array.from({ length: 10 }).map((idx, d) => (
        <LectureBox
          grade="2학년"
          people="10명"
          place="강당"
          teacher="백승하"
          title="야구"
          key={d}
        />
      ))}
    </LectureListWrapper>
  );
};

export default TodayLaectureList;
