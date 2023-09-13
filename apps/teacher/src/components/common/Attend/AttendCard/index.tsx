import React, { useState } from "react";
import * as S from "./style";
import AttendIcon from "../../../assets/image/AttendTitleIcon.svg";
import AttendProfile from "../../../../assets/image/AttendCardProfile.svg";
import { Button } from "@checkin/ui";

const Attendcard = () => {
  const [isAttend, setIsAttend] = useState("false");
  return (
    <>
      <S.AttendCardWrap>
        <S.AttendInfoContainer>
          <S.AttendProfileImg src={AttendProfile} alt=""></S.AttendProfileImg>
          <S.AttendName>김예림</S.AttendName>
          <S.AttendNumber>2학년 4반 2번</S.AttendNumber>
          <Button
            type="primary"
            onClick={() => {
              console.log("click!");
            }}
          >
            출석하기
          </Button>
        </S.AttendInfoContainer>
      </S.AttendCardWrap>
    </>
  );
};

export default Attendcard;
