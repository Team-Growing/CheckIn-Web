import { LectureTagBox } from "@checkin/ui";
import React from "react";
import { MyLectusContainer } from "./style";

const MyLectures = () => {
  return (
    <>
      <MyLectusContainer>
        {Array.from({ length: 5 }).map(() => (
          <LectureTagBox
            lectureTag="SPORTS"
            type="Enrol"
            grade="2학년"
            people="10명"
            place="라이온즈파크"
            teacher="원태인"
            title="야구교습"
          />
        ))}
      </MyLectusContainer>
    </>
  );
};

export default MyLectures;
