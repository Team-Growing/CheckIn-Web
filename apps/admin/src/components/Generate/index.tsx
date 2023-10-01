import React, { useState } from "react";
import * as S from "./style";
import { Button, ButtonWrapper, SectionHeader } from "@checkin/ui";
import { SwitchCase } from "@checkin/util";
import NoticeGenerate from "./NoticeGenerate";
import LectureGenerate from "./LectureGenerate";

const Suggestion = () => {
  const [section, setSection] = useState("수업");
  return (
    <S.SuggestionContainer>
      <SectionHeader
        title="방과후 수업 생성"
        subTitle="suggesting an after-school class"
      />
      <ButtonWrapper>
        {section == "수업" ? (
          <>
            <Button type="primary" onClick={() => setSection("수업")}>
              수업 생성
            </Button>
            <Button type="unSelect" onClick={() => setSection("공지")}>
              공지 생성
            </Button>
          </>
        ) : (
          <>
            <Button type="unSelect" onClick={() => setSection("수업")}>
              수업 생성
            </Button>
            <Button type="primary" onClick={() => setSection("공지")}>
              공지 생성
            </Button>
          </>
        )}
      </ButtonWrapper>
      <SwitchCase
        value={section}
        caseBy={{
          수업: <LectureGenerate />,
          공지: <NoticeGenerate />,
        }}
      />
    </S.SuggestionContainer>
  );
};

export default Suggestion;
