import React from "react";
import { MyCancelLecturesContainer } from "./style";
import { LectureBox, LectureTagBox } from "@checkin/ui";

const MyCancelLectures = () => {
  return (
    <MyCancelLecturesContainer>
      {Array.from({ length: 5 }).map(() => (
        <LectureTagBox
          type="absence"
          grade="2학년"
          people="10명"
          place="라이온즈파크"
          teacher="원태인"
          title="야구교습"
        />
      ))}
    </MyCancelLecturesContainer>
  );
};

export default MyCancelLectures;
