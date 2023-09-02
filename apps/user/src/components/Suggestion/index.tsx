import React from "react";
import * as S from "./style";
import { SectionHeader } from "@checkin/ui";

const Suggestion = () => {
  return (
    <S.SuggestionContainer>
      <SectionHeader
        title="수업 제안, 건의"
        subTitle="suggesting an after-school class"
      />
    </S.SuggestionContainer>
  );
};

export default Suggestion;
