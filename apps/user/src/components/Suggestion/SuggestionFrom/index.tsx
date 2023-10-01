import React from "react";
import * as S from "./style";
import { Button, InputWrap, SelectWrap, TextareaWrap } from "@checkin/ui";

const SuggestionForm = () => {
  const onChange = () => {};
  return (
    <>
      <S.SuggestionFormContainer>
        <InputWrap
          customStyle={{ width: "55%" }}
          require={true}
          placeholder="ex) 알고리즘, Springboot 심화반"
          info="수업 이름"
          intro="제안하는 수업 이름을 입력해주세요"
        />

        <TextareaWrap
          customStyle={{ width: "66%" }}
          require={true}
          placeholder="ex ) 알고리즘 코딩테스트를 준비하기 위해 고난이도 알고리즘 문제를 푸는 반"
          info="수업 내용"
          intro="제안하는 수업의 내용을 자세하게 적어주세요"
        />

        <SelectWrap
          customStyle={{ width: "20%" }}
          require={true}
          info="수업 요일"
          intro="수업을 원하는 요일을 선택해주세요"
          items={["하이", "하이1"]}
          onChange={onChange}
          value="ex ) 월요일"
          name="dayOfWeek"
        />

        <TextareaWrap
          customStyle={{ width: "66%" }}
          placeholder="ex ) “알고리즘 관련 도서가 필요합니다”"
          require={true}
          info="바라는 점"
          intro="추가적으로 적고 싶은 내용을 적어주세요."
        />
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
      </S.SuggestionFormContainer>
    </>
  );
};

export default SuggestionForm;
