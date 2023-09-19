import {
  Input,
  InputInfo,
  InputIntroText,
  InputWrap,
  Textarea,
} from "@checkin/ui";
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

const NameAndExplanation = ({ lectureText, onChangeLectureText }: Props) => {
  return (
    <>
      <InputWrap>
        <InputInfo>
          수업 이름 <span>*</span>
        </InputInfo>
        <Input
          customStyle={{ width: "40%" }}
          placeholder="ex) 알고리즘, Springboot 심화반"
          value={lectureText.lectureName}
          onChange={onChangeLectureText}
          name="lectureName"
        />
        <InputIntroText>생성할 수업 이름을 입력해주세요</InputIntroText>
      </InputWrap>
      <InputWrap>
        <InputInfo>
          수업 내용 <span>*</span>
        </InputInfo>
        <Textarea
          customStyle={{ width: "50%" }}
          value={lectureText.explanation}
          onChange={onChangeLectureText}
          name="explanation"
          placeholder="ex ) 알고리즘 코딩테스트를 준비하기 위해 고난이도 알고리즘 문제를 푸는 반"
        />
        <InputIntroText>
          제안하는 수업의 내용을 자세하게 적어주세요
        </InputIntroText>
      </InputWrap>
    </>
  );
};

export default NameAndExplanation;
