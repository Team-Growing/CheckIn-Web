import { TextInputWrap, TextareaWrap } from "@checkin/ui";
import React, { ChangeEvent } from "react";

interface Props {
  lectureNameExplan: {
    lectureName: string;
    explanation: string;
  };
  onChangeLectureText: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const LectureNameAndExplantion = ({
  lectureNameExplan,
  onChangeLectureText,
}: Props) => {
  return (
    <>
      <TextInputWrap
        info="수업 이름"
        intro="생성할 수업 이름을 입력해주세요"
        value={lectureNameExplan.lectureName}
        name="lectureName"
        onChange={onChangeLectureText}
        require={true}
      />
      <TextareaWrap
        info="수업 내용"
        intro="제안하는 수업의 내용을 자세하게 적어주세요"
        value={lectureNameExplan.explanation}
        name="explanation"
        onChange={onChangeLectureText}
        require={true}
      />
    </>
  );
};

export default LectureNameAndExplantion;
