import React from "react";
import * as S from "./style";
import AttendIcon from "../../../assets/image/AttendTitleIcon.svg";
import AttendCard from "../../common/Attend/AttendCard";
import { Button } from "@checkin/ui";

const dummyList = [
  {
    id: 1,
    author: "hyun",
    content: "첫번째",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "jeong",
    content: "두번째",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "react",
    content: "3번째",
    emotion: 3,
    created_date: new Date().getTime(),
  },
];

const Attend = () => {
  return (
    <>
      <S.AttendWrap>
        <S.AttendTitleContainer>
          <S.AttendIconImg src={AttendIcon} alt=""></S.AttendIconImg>
          <S.AttendTitle>방과후 출석 확인</S.AttendTitle>
          <S.AttendSubtitle>after-school attendance check</S.AttendSubtitle>
        </S.AttendTitleContainer>
        <S.ButtonWrap>
          <Button
            type="primary"
            onClick={() => {
              console.log("click!");
            }}
          >
            테니스A
          </Button>
          <Button
            type="outline"
            onClick={() => {
              console.log("click!");
            }}
          >
            테니스B
          </Button>
        </S.ButtonWrap>
        <S.AttendStudentTitle>출석 한 학생</S.AttendStudentTitle>
        <S.AttendListWrapper>
          {[...Array(5)].map((idx) => (
           ))}
        </S.AttendListWrapper>
        <S.AttendStudentTitle>미출석 한 학생</S.AttendStudentTitle>
        <S.AttendListWrapper>
          {[...Array(5)].map((idx) => (
           ))}
        </S.AttendListWrapper>
      </S.AttendWrap>
    </>
  );
};

export default Attend;
