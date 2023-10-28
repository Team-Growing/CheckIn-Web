import React, { useState } from "react";
import * as S from "./style";
import { Button, ButtonWrapper, SectionHeader } from "@checkin/ui";
import { SwitchCase } from "@checkin/util";
import QuestionConfirm from "./QuestionConfirm";
import SuggestionConfirm from "./SuggestionConfirm";

export type ConfrimSectionType = "question" | "suggestion";

const Confirm = () => {
  const [section, setSection] = useState<ConfrimSectionType>("question");

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
            onClick={() => setSection("question")}
            isSelect={section === "question" ? false : true}
          >
            문의 사항
          </Button>
          <Button
            type="primary"
            onClick={() => setSection("suggestion")}
            isSelect={section === "suggestion" ? false : true}
          >
            수업 제안
          </Button>
        </ButtonWrapper>
      </S.ConfirmTopWrap>
      <SwitchCase
        value={section}
        caseBy={{
          question: <QuestionConfirm />,
          suggestion: <SuggestionConfirm />,
        }}
      />
    </S.ConfirmContainer>
  );
};

export default Confirm;
