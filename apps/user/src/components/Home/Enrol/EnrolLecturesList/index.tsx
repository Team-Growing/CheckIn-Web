import React from "react";
import * as S from "./style";
import { EnrolLectureBox } from "@checkin/ui";

const EnrolLectureList = () => {
  return (
    <S.EnrolLectureListContainer>
      {Array.from({ length: 2 }).map((id, idx) => (
        <EnrolLectureBox
          grade="2학년"
          people="10명"
          place="강당"
          title="펑고"
          key={idx}
        />
      ))}
    </S.EnrolLectureListContainer>
  );
};

export default EnrolLectureList;
