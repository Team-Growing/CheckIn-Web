import React from "react";
import * as S from "./style";
import AttendIcon from "../../../assets/image/AttendTitleIcon.svg";
import AttendCard from "../../common/Attend/AttendCard";
import { Button } from "@checkin/ui";
import { useGetAttendantsQuery } from "@/queries/AttendanceCode/query";
export type UserType = {
  id: number;
  name: string;
  age: number;
  position: string;
};
const Attend = () => {
  const { data } = useGetAttendantsQuery();

  console.log(data?.data.attendants);

  // const dummyList = [
  //   {
  //     id: 0,
  //     name: "철수",
  //     age: 27,
  //     position: "front-end",
  //   },
  //   {
  //     id: 1,
  //     name: "민성",
  //     age: 24,
  //     position: "back-end",
  //   },
  // ];
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
        <S.AttendListWrapper></S.AttendListWrapper>
        <S.AttendStudentTitle>미출석 한 학생</S.AttendStudentTitle>
        <S.AttendListWrapper>
          {data?.data.attendants.map((data) => {
            return (
              <AttendCard key={data.id} user={data}>
                {data.content}
              </AttendCard>
            );
          })}
          {/* {.map((data) => {
            return <AttendCard key={data.id} user={data}></AttendCard>;
          })} */}
        </S.AttendListWrapper>
      </S.AttendWrap>
    </>
  );
};

export default Attend;
