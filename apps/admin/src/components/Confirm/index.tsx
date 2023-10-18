import React, { useState } from "react";
import * as S from "./style";
import { Button, ButtonWrapper, SectionHeader } from "@checkin/ui";
import { SwitchCase } from "@checkin/util";
import QuestionConfirm from "./QuestionConfirm";
import SuggestionConfirm from "./SuggestionConfirm";
import { useGetQuestionsQuery } from "@/queries/Question/query";

type SectionType = "문의" | "제안";

const Confirm = () => {
  const [section, setSection] = useState<SectionType>("문의");

  return (
    <S.ConfirmContainer>
      <S.ConfirmTopWrap>
        <SectionHeader
          title="문의, 제안 확인"
          subTitle="Inquiries, confirmation of suggestions"
        />
        <ButtonWrapper>
          <Button
            type="primary"
            onClick={() => setSection("문의")}
            isSelect={section === "문의" ? false : true}
          >
            문의 사항
          </Button>
          <Button
            type="primary"
            onClick={() => setSection("제안")}
            isSelect={section === "제안" ? false : true}
          >
            수업 제안
          </Button>
        </ButtonWrapper>
      </S.ConfirmTopWrap>
      <SwitchCase
        value={section}
        caseBy={{ 문의: <QuestionConfirm />, 제안: <SuggestionConfirm /> }}
      />
    </S.ConfirmContainer>
  );
};

export default Confirm;
