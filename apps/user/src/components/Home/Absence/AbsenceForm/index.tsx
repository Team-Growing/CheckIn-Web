import React from "react";
import { Button, Select, Textarea } from "@checkin/ui";
import * as S from "./style";
import useApplyAbsence from "@/hooks/Absence/useApplyAbsence";

const AbsenceForm = () => {
  const {
    applyAbsenceData,
    myLectures,
    onSetLectureId,
    onSetReason,
    onSubmitApplyAbsenceData,
    lectureName,
  } = useApplyAbsence();

  return (
    <S.ApplyoutFormContainer onSubmit={onSubmitApplyAbsenceData}>
      <S.ApplyoutFormInputWrap>
        <S.ApplyoutRequireText>
          방과후 이름 <span>*</span>
        </S.ApplyoutRequireText>
        <Select
          name="lectureId"
          items={myLectures?.map((data) => data.lectureName)}
          onChange={onSetLectureId}
          value={lectureName}
          placeholder="방과후 이름을 선택해주세요"
          customStyle={{ width: "100%" }}
        />
      </S.ApplyoutFormInputWrap>
      <S.ApplyoutFormInputWrap style={{ height: "50%" }}>
        <S.ApplyoutRequireText>
          결강 사유 <span>*</span>
        </S.ApplyoutRequireText>
        <Textarea
          name="reason"
          onChange={onSetReason}
          value={applyAbsenceData.reason}
          placeholder="결강 사유를 입력해주세요"
          customStyle={{ width: "100%", height: "100%" }}
        />
      </S.ApplyoutFormInputWrap>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button type="primary" customStyle={{ width: "200px" }}>
          결강 신청
        </Button>
      </div>
    </S.ApplyoutFormContainer>
  );
};

export default AbsenceForm;
