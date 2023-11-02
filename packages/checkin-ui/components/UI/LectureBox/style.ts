import { LectureTagType } from "@checkin/types";
import { dataTransform, getRem } from "@checkin/util";
import styled, { CSSObject, css } from "styled-components";

export const LectureBoxContainer = styled.div<{
  type: LectureTagType | string;
}>`
  position: relative;
  width: 250px;
  height: 172px;

  border-radius: 10px;

  border: none;
  background-color: ${({ type }) =>
    dataTransform.LectureTypeColor(type)?.background};

  margin-top: 20px;

  cursor: pointer;
`;

export const LectureCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 154px;

  padding: 15px 11px;

  background-color: #f9f9f9;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: none;
`;

export const LectureTitle = styled.h1`
  font-size: 1.3rem;
`;

export const LectureGrade = styled.p`
  color: #949494;
  font-size: ${getRem(14)};

  margin-top: 7px;
`;

export const LectureBoxTopWrap = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const LectureBottomWrap = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;

  row-gap: 4px;
`;

export const LectureInfoText = styled.p`
  font-size: ${getRem(14)};
  color: #1f1f1f;
`;

export const EnrolLectureBoxContainer = styled.div<{
  type: LectureTagType | string;
  lectureId: boolean;
}>`
  width: 100%;
  height: 40%;

  position: relative;
  border-radius: 10px;
  background-color: ${({ type }) =>
    dataTransform.LectureTypeColor(type)?.background};
  border: none;

  box-shadow: ${({ lectureId }) =>
    lectureId && "0px 4px 10px rgba(0, 0, 0, 0.15)"};

  margin-top: 20px;

  cursor: pointer;
`;

export const EnrolLectureCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 85%;

  padding: 11px 19px;

  background-color: #f9f9f9;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: none;
`;

export const EnrolLectureTitle = styled.h1`
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }

  @media (max-width: 576px) {
    font-size: 10px;
  }
`;

export const EnrolLectureGrade = styled.div`
  width: max-content;
  color: #949494;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: ${getRem(7)};
  }

  @media (max-width: 576px) {
    font-size: ${getRem(5)};
  }

  margin-top: 7px;
`;

export const EnrolLectureBoxTopWrap = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const EnrolLectureInfoText = styled.p`
  font-size: ${getRem(14)};
  color: #1f1f1f;
`;

export const LectureTagBoxContainer = styled.div<{
  customStyle?: CSSObject;
  isSelect?: boolean;
}>`
  width: 330px;
  height: 220px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 10px;
  background: #fff;

  padding: 30px 28px;

  ${({ customStyle }) => customStyle}
  cursor: pointer;
  ${({ isSelect }) =>
    isSelect &&
    css`
      border: 1px solid #00c537;
    `}
`;

export const LectureTag = styled.div<{
  tagColor?: string;
  tagBackground?: string;
}>`
  width: 88px;
  height: 27.5px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 30px;
  border: 2px solid rgba(53, 170, 255, 0);
  background-color: ${({ tagBackground }) => tagBackground};
  color: ${({ tagColor }) => tagColor};
  margin-top: 8px;
`;

export const CanceledLectureReasonBox = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 5px;

  width: 270px;
  height: 80px;

  border-radius: 10px;
  background: #f2f2f2;

  padding: 10px 13px;
`;

export const CancelReason = styled.p`
  font-size: ${getRem(16)};
  font-weight: 500;
`;

export const CancelReasonText = styled.p`
  font-size: ${getRem(14)};
  font-weight: 400;
`;
