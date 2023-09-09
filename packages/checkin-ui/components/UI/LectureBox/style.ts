import styled from "styled-components";

export const LectureBoxContainer = styled.div`
  position: relative;
  width: 250px;
  height: 172px;

  border-radius: 10px;
  background-color: #0073c9;
  border: none;

  margin-top: 20px;
`;

export const LectureCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 144px;

  padding: 15px 11px;

  background-color: #f9f9f9;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: none;
`;

export const LectureTitle = styled.h1`
  font-size: 26px;
  font-weight: bold;
`;

export const LectureGrade = styled.p`
  color: #949494;
  font-size: 14px;

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
  font-size: 14px;
  color: #1f1f1f;
`;

export const EnrolLectureBoxContainer = styled.div`
  width: 100%;
  height: 100px;

  position: relative;
  border-radius: 10px;
  background-color: #0073c9;
  border: none;

  margin-top: 20px;
`;

export const EnrolLectureCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 85px;

  padding: 11px 19px;

  background-color: #f9f9f9;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: none;
`;

export const EnrolLectureTitle = styled.h1`
  font-size: 20px;
`;

export const EnrolLectureGrade = styled.p`
  color: #949494;
  font-size: 14px;

  margin-top: 7px;
`;

export const EnrolLectureBoxTopWrap = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const EnrolLectureBottomWrap = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;

  row-gap: 4px;
`;

export const EnrolLectureInfoText = styled.p`
  font-size: 14px;
  color: #1f1f1f;
`;
