import React from "react";
import * as S from "./style";
import {
  Button,
  Input,
  InputInfo,
  InputIntroText,
  InputWrap,
  Select,
  Textarea,
} from "@checkin/ui";

const SuggestionForm = () => {
  const onChange = () => {};
  return (
    <>
      <S.SuggestionFormContainer>
        <InputWrap>
          <InputInfo>
            수업 이름 <span>*</span>
          </InputInfo>
          <Input customStyle={{ width: "40%" }} />
          <InputIntroText>제안하는 수업 이름을 입력해주세요</InputIntroText>
        </InputWrap>
        <InputWrap>
          <InputInfo>
            수업 내용 <span>*</span>
          </InputInfo>
          <Textarea
            customStyle={{ width: "50%" }}
            placeholder="ex ) 알고리즘 코딩테스트를 준비하기 위해 고난이도 알고리즘 문제를 푸는 반
"
          />
          <InputIntroText>
            제안하는 수업의 내용을 자세하게 적어주세요
          </InputIntroText>
        </InputWrap>
        <InputWrap>
          <InputInfo>
            수업 요일 <span>*</span>
          </InputInfo>
          <Select items={["하이", "하이1"]} onChange={onChange} value="value" />
          <InputIntroText>수업을 원하는 요일을 선택해주세요</InputIntroText>
        </InputWrap>
        <InputWrap>
          <InputInfo>
            바라는 점 <span>*</span>
          </InputInfo>
          <Textarea
            customStyle={{ width: "50%" }}
            placeholder="ex ) “알고리즘 관련 도서가 필요합니다”"
          />
          <InputIntroText>
            추가적으로 적고 싶은 내용을 적어주세요.
          </InputIntroText>
        </InputWrap>
      </S.SuggestionFormContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "26px",
        }}
      >
        <Button style={{ width: "200px" }} type="primary">
          전송하기
        </Button>
      </div>
    </>
  );
};

export default SuggestionForm;
