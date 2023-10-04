import React from "react";
import { MyCancelLecturesContainer } from "./style";
import { CheckMyAbsense } from "@checkin/ui";

const MyCancelLectures = () => {
  return (
    <MyCancelLecturesContainer>
      {Array.from({ length: 10 }).map(() => (
        <CheckMyAbsense
          grade="2"
          isCheck={true}
          name="백승하"
          number="12"
          reason="눈이 너무너무 아파요"
          room="1"
        />
      ))}
    </MyCancelLecturesContainer>
  );
};

export default MyCancelLectures;
