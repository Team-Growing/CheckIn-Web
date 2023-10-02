import React, { useState } from "react";
import { Button, Select, Textarea } from "@checkin/ui";
import * as S from "./style";

const ApplyoutForm = () => {
  const [value, setValue] = useState("방과후 이름을 선택해주세요");
  const [teacherValue, setTeacherValue] = useState("담당선생님을 선택해주세요");
  const onChange = () => {};

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
        <Select
          items={["방과후", "라면"]}
          onChange={onChange}
          value={value}
          customStyle={{ width: "100%" }}
        />
      </S.ApplyoutFormInputWrap>
      <S.ApplyoutFormInputWrap>
        <S.ApplyoutRequireText>
          문의 내용 <span>*</span>
        </S.ApplyoutRequireText>
        <Textarea
          placeholder="결강 사유를 입력해주세요"
          customStyle={{ width: "100%" }}
          type="text"
          maxLength="1200%"
          className="autoTextarea"
          onKeyDown={autoResizeTextarea} // keydown이되엇을때마다 autoResizeTextarea실행
          onKeyUp={autoResizeTextarea} // keyup이되엇을때마다 autoResizeTextarea실행
        />
      </S.ApplyoutFormInputWrap>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button type="primary" style={{ width: "200px" }}>
          문의하기
        </Button>
      </div>
    </S.ApplyoutFormContainer>
  );
};

export default ApplyoutForm;
