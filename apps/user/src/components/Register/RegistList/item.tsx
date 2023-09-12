import React from "react";
import { ItemBox, ItemContainer } from "./style";
import { LectureTagBox } from "@checkin/ui";

const RegistList = () => {
  return (
    <ItemContainer>
      {Array.from({ length: 20 }).map(() => {
        return (
          <>
            <LectureTagBox
              type="Enrol"
              grade="2학년"
              people="10명"
              place="하이"
              teacher="류현진"
              title="피칭"
            />
          </>
        );
      })}
    </ItemContainer>
  );
};

export default RegistList;
