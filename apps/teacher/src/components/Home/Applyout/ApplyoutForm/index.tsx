import React, { useState } from "react";
import { Button, Select, Textarea, Flex } from "@checkin/ui";
import * as S from "./style";
import useWriteQuestion from "@/hooks/Question/useWriteQuestion";

const ApplyoutForm = () => {
  const {
    title,
    content,
    onChangeTitleData,
    onChangeContentData,
    onSubmitQuestionData,
  } = useWriteQuestion();

  const [value, setValue] = useState("문의 제목을 선택해주세요");

  const autoResizeTextarea = () => {
    let textarea = document.querySelector(".autoTextarea");

    if (textarea) {
      textarea.style.height = "auto";
      let height = textarea.scrollHeight; // 높이
      textarea.style.height = `${height + 8}px`;
    }
  };

  return (
    <S.ApplyoutFormContainer>
      <S.ApplyoutFormInputWrap>
        <S.ApplyoutRequireText>
          문의 제목 <span>*</span>
        </S.ApplyoutRequireText>
        <Textarea
          placeholder="문의 제목을 입력해주세요"
          customStyle={{ width: "100%" }}
          type="text"
          maxLength="1200%"
          value={title}
          onChange={onChangeTitleData}
          className="autoTextarea"
          onKeyDown={autoResizeTextarea} // keydown이되엇을때마다 autoResizeTextarea실행
          onKeyUp={autoResizeTextarea} // keyup이되엇을때마다 autoResizeTextarea실행
        />
      </S.ApplyoutFormInputWrap>
      <S.ApplyoutFormInputWrap>
        <S.ApplyoutRequireText>
          문의 내용 <span>*</span>
        </S.ApplyoutRequireText>
        <Textarea
          placeholder="문의 내용을 입력해주세요"
          customStyle={{ width: "100%" }}
          type="text"
          value={content}
          onChange={onChangeContentData}
          maxLength="1200%"
          className="autoTextarea"
          onKeyDown={autoResizeTextarea} // keydown이되엇을때마다 autoResizeTextarea실행
          onKeyUp={autoResizeTextarea} // keyup이되엇을때마다 autoResizeTextarea실행
        />
      </S.ApplyoutFormInputWrap>
      <Flex
        justify={"center"}
        customStyle={{
          width: "100%",
        }}
        gap={20}
      >
        <Button
          type="primary"
          onClick={onSubmitQuestionData}
          style={{ width: "200px" }}
        >
          문의하기
        </Button>
      </Flex>
    </S.ApplyoutFormContainer>
  );
};

export default ApplyoutForm;
