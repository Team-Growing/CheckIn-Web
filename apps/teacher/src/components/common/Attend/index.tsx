import React from "react";
import * as S from "./style";
import Sidebar from "../Sidebar";
import AttendIcon from "../../../assets/image/AttendTitleIcon.svg";
import AttendCard from "../../common/Attend/AttendCard";
import { Button } from "@checkin/ui";
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
        <S.AttendCardContainer>
          <AttendCard
          ></AttendCard>
        </S.AttendCardContainer>
      </S.AttendWrap>
    </>
  );
};

export default Attend;
