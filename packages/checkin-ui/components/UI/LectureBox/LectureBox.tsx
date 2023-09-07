import {
  LectureBottomWrap,
  LectureBoxContainer,
  LectureBoxTopWrap,
  LectureCard,
  LectureGrade,
  LectureInfoText,
  LectureTitle,
} from "./style";
import { LectureBoxProps } from "./types";

export const LectureBox = ({
  grade,
  people,
  place,
  teacher,
  title,
}: LectureBoxProps) => {
  return (
    <LectureBoxContainer>
      <LectureCard>
        <LectureBoxTopWrap>
          <LectureTitle>{title}</LectureTitle>
          <LectureGrade>{grade}</LectureGrade>
        </LectureBoxTopWrap>
        <LectureBottomWrap>
          <LectureInfoText>{`장소 : ${place}`}</LectureInfoText>
          <LectureInfoText>{`강사 : ${teacher}`}</LectureInfoText>
          <LectureInfoText>{`참가인원 : ${people}`}</LectureInfoText>
        </LectureBottomWrap>
      </LectureCard>
    </LectureBoxContainer>
  );
};
