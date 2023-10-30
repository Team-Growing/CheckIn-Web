import React from "react";
import { Button, Textarea, Flex } from "@checkin/ui";
import * as S from "./style";
import useWriteQuestion from "@/hooks/Question/useWriteQuestion";

const QuestionForm = () => {
  const {
    questionData,
    onChangeQuestionData,
    onSubmitQuestionData,
  } = useWriteQuestion();

  const autoResizeTextarea = () => {
    let textarea = document.querySelector(".autoTextarea");
  };

  return (
    <S.ApplyoutFormContainer>
      <S.ApplyoutFormInputWrap>
        <S.ApplyoutRequireText>
          문의 제목 <span>*</span>
        </S.ApplyoutRequireText>
        <Textarea
          placeholder="문의 제목을 입력해주세요"
          customStyle={{ width: "100%", height: "40px" }}
          maxLength={1200}
          value={questionData.title}
          name="title"
          onChange={onChangeQuestionData}
          className="autoTextarea"
          onKeyDown={autoResizeTextarea} // keydown이되엇을때마다 autoResizeTextarea실행
          onKeyUp={autoResizeTextarea} // keyup이되엇을때마다 autoResizeTextarea실행
        />
      </S.ApplyoutFormInputWrap>
      <S.ApplyoutFormInputWrap style={{ height: "50%" }}>
        <S.ApplyoutRequireText>
          문의 내용 <span>*</span>
        </S.ApplyoutRequireText>
        <Textarea
          placeholder="문의 내용을 입력해주세요"
          customStyle={{ width: "100%", height: "100%" }}
          value={questionData.content}
          name="content"
          onChange={onChangeQuestionData}
          maxLength={1200}
          className="autoTextarea"
          onKeyDown={autoResizeTextarea} // keydown이되엇을때마다 autoResizeTextarea실행
          onKeyUp={autoResizeTextarea} // keyup이되엇을때마다 autoResizeTextarea실행
        />
      </S.ApplyoutFormInputWrap>
      <Flex
        justify="end"
        customStyle={{
          width: "100%",
        }}
        gap={20}
      >
        <Button
          type="primary"
          onClick={onSubmitQuestionData}
          customStyle={{ width: "200px" }}
        >
          문의하기
        </Button>
      </Flex>
    </S.ApplyoutFormContainer>
  );
};

export default QuestionForm;
