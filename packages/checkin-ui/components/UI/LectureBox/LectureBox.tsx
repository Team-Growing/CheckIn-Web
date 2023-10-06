import { dataTransform } from "@checkin/util";
import { Flex } from "../../Layout/Flex/Flex";
import { Button } from "../Button/Button";
import * as S from "./style";
import {
  EnrolLectureBoxProps,
  LectureBoxProps,
  LectureTagBoxProps,
} from "./types";

export const LectureBox = ({
  grade,
  people,
  place,
  teacher,
  title,
  lectureTag,
}: LectureBoxProps) => {
  const LecturePlaceName = dataTransform.LecturePlaceTypeName(place);
  return (
    <S.LectureBoxContainer type={lectureTag}>
      <S.LectureCard>
        <S.LectureBoxTopWrap>
          <S.LectureTitle>{title}</S.LectureTitle>
          <S.LectureGrade>{`${grade}학년`}</S.LectureGrade>
        </S.LectureBoxTopWrap>
        <S.LectureBottomWrap>
          <S.LectureInfoText>{`장소 : ${LecturePlaceName}`}</S.LectureInfoText>
          <S.LectureInfoText>{`강사 : ${teacher}`}</S.LectureInfoText>
          <S.LectureInfoText>{`참가인원 : ${people}명`}</S.LectureInfoText>
        </S.LectureBottomWrap>
      </S.LectureCard>
    </S.LectureBoxContainer>
  );
};

export const EnrolLectureBox = ({
  grade,
  people,
  place,
  title,
  lectureTag,
  onClick,
  isSelect,
}: EnrolLectureBoxProps) => {
  return (
    <S.EnrolLectureBoxContainer
      lectureId={isSelect}
      type={lectureTag}
      onClick={onClick}
    >
      <S.EnrolLectureCard>
        <S.EnrolLectureBoxTopWrap>
          <S.EnrolLectureTitle>{title}</S.EnrolLectureTitle>
          <S.EnrolLectureGrade>{`${grade}학년`}</S.EnrolLectureGrade>
        </S.EnrolLectureBoxTopWrap>
        <S.EnrolLectureBottomWrap>
          <S.EnrolLectureInfoText>{`장소 : ${dataTransform.LecturePlaceTypeName(
            place
          )}`}</S.EnrolLectureInfoText>
          <S.EnrolLectureInfoText>{`참가인원 : ${people}`}</S.EnrolLectureInfoText>
        </S.EnrolLectureBottomWrap>
      </S.EnrolLectureCard>
    </S.EnrolLectureBoxContainer>
  );
};

export const LectureTagBox = ({
  grade,
  people,
  place,
  teacher,
  title,
  type,
  lectureTag,
  customStyle,
}: LectureTagBoxProps) => {
  const LectureTagColor = dataTransform.LectureTypeColor(lectureTag);
  return (
    <S.LectureTagBoxContainer customStyle={customStyle}>
      <Flex direction="column">
        <S.LectureBoxTopWrap>
          <S.LectureTitle>{title}</S.LectureTitle>
          <S.LectureGrade>{grade}</S.LectureGrade>
        </S.LectureBoxTopWrap>
        <S.LectureTag
          tagBackground={LectureTagColor?.background}
          tagColor={LectureTagColor?.color}
        >
          스포츠
        </S.LectureTag>
      </Flex>
      {type == "Enrol" ? (
        <Flex justify="between">
          <S.LectureBottomWrap>
            <S.LectureInfoText>{`장소 : ${place}`}</S.LectureInfoText>
            <S.LectureInfoText>{`강사 : ${teacher}`}</S.LectureInfoText>
            <S.LectureInfoText>{`참가인원 : ${people}`}</S.LectureInfoText>
          </S.LectureBottomWrap>
          <Button type="outline" customStyle={{ marginTop: "5px" }}>
            수강신청
          </Button>
        </Flex>
      ) : (
        <S.CanceledLectureReasonBox>
          <S.CancelReason>결강사유</S.CancelReason>
          <S.CancelReasonText>건강검진으로 인한 병원방문</S.CancelReasonText>
        </S.CanceledLectureReasonBox>
      )}
    </S.LectureTagBoxContainer>
  );
};

export const CanceledLectureBox = () => {};
