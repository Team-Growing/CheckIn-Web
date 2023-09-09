import {
  EnrolLectureBottomWrap,
  EnrolLectureBoxContainer,
  EnrolLectureBoxTopWrap,
  EnrolLectureCard,
  EnrolLectureGrade,
  EnrolLectureInfoText,
  EnrolLectureTitle,
  LectureBottomWrap,
  LectureBoxContainer,
  LectureBoxTopWrap,
  LectureCard,
  LectureGrade,
  LectureInfoText,
  LectureTitle,
} from "./style";
import { EnrolLectureBoxProps, LectureBoxProps } from "./types";

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

export const EnrolLectureBox = ({
  grade,
  people,
  place,
  title,
}: EnrolLectureBoxProps) => {
  return (
    <EnrolLectureBoxContainer>
      <EnrolLectureCard>
        <EnrolLectureBoxTopWrap>
          <EnrolLectureTitle>{title}</EnrolLectureTitle>
          <EnrolLectureGrade>{grade}</EnrolLectureGrade>
        </EnrolLectureBoxTopWrap>
        <EnrolLectureBottomWrap>
          <EnrolLectureInfoText>{`장소 : ${place}`}</EnrolLectureInfoText>
          <EnrolLectureInfoText>{`참가인원 : ${people}`}</EnrolLectureInfoText>
        </EnrolLectureBottomWrap>
      </EnrolLectureCard>
    </EnrolLectureBoxContainer>
  );
};
