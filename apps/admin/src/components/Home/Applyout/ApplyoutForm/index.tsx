import React, { useState } from "react";
import { Button, Select, Textarea } from "@checkin/ui";
import * as S from "./style";

const ApplyoutForm = () => {
  const [value, setValue] = useState("방과후 이름을 선택해주세요");
  const [teacherValue, setTeacherValue] = useState("담당선생님을 선택해주세요");
  const onChange = () => {};
  return (
    <S.ApplyoutFormContainer>
      <S.ApplyoutFormInputWrap>
        <S.ApplyoutRequireText>
          담당자 제목 <span>*</span>
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
        />
      </S.ApplyoutFormInputWrap>
      <S.ApplyoutFormInputWrap>
        <S.ApplyoutRequireText>
          담당 교사 <span>*</span>
        </S.ApplyoutRequireText>
        <Select
          items={["방과후", "라면"]}
          onChange={onChange}
          value={teacherValue}
          customStyle={{ width: "100%" }}
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
