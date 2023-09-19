import React from "react";
import * as S from "./style";
import { SectionHeader } from "@checkin/ui";
import GenerateForm from "./GenerateForm";

const Suggestion = () => {
  return (
    <S.SuggestionContainer>
      <SectionHeader
        title="방과후 수업 생성"
        subTitle="suggesting an after-school class"
      />
      <GenerateForm />
    </S.SuggestionContainer>
  );
};

export default Suggestion;
