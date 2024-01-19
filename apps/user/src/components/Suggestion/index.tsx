"use client";

import React from "react";
import * as S from "./style";
import { SectionHeader } from "@checkin/ui";
import SuggestionForm from "./SuggestionFrom";

const Suggestion = () => {
  return (
    <S.SuggestionContainer>
      <SectionHeader
        title="수업 제안, 건의"
        subTitle="suggesting an after-school class"
      />
      <SuggestionForm />
    </S.SuggestionContainer>
  );
};

export default Suggestion;
