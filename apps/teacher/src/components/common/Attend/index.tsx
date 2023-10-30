import React from "react";
import * as S from "./style";
import AttendIcon from "../../../assets/image/AttendTitleIcon.svg";
import AttendCard from "./AttendCompletedCard";
import { Button } from "@checkin/ui";
import { useGetAttendantsQuery } from "@/queries/AttendanceCode/query";
import AttendNotCompletedcard from "./AttendNotCompletedCard";
import AttendCompletedcard from "./AttendCompletedCard";
export type UserType = {
  id: number;
  name: string;
  age: number;
  position: string;
};
const Attend = () => {
  const { data } = useGetAttendantsQuery();
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
          {data?.data.attendants.map((data) => (
            <AttendCompletedcard key={data.id} user={data}>
              {data.content}
            </AttendCompletedcard>
          ))}
        </S.AttendListWrapper>
        <S.AttendStudentTitle>미출석 한 학생</S.AttendStudentTitle>
        <S.AttendListWrapper>
          {data?.data.nonAttendants.map((data) => {
            return (
              <AttendNotCompletedcard key={data.id} user={data}>
                {data.content}
              </AttendNotCompletedcard>
            );
          })}
        </S.AttendListWrapper>
      </S.AttendWrap>
    </>
  );
};

export default Attend;
