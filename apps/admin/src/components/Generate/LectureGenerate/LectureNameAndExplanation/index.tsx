import { InputWrap, Textarea, TextareaWrap } from "@checkin/ui";
import React, { ChangeEvent } from "react";

interface Props {
  lectureText: {
    lectureName: string;
    explanation: string;
  };
  onChangeLectureText: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const LectureNameAndExplantion = ({
  lectureText,
  onChangeLectureText,
}: Props) => {
  return (
    <>
      <InputWrap
        info="수업 이름"
        intro="생성할 수업 이름을 입력해주세요"
        require={true}
      />
      <TextareaWrap
        info="수업 내용"
        intro="제안하는 수업의 내용을 자세하게 적어주세요"
        require={true}
      />
    </>
  );
};

export default LectureNameAndExplantion;
