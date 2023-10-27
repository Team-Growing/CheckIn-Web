import React, { useState } from "react";
import * as S from "./style";
import AttendIcon from "../../../assets/image/AttendTitleIcon.svg";
import AttendProfile from "../../../../assets/image/AttendCardProfile.svg";
import { Button } from "@checkin/ui";
import { AttendanceListResponse } from "@checkin/types";
import { UserType } from "..";

// interface Props {
//   data: AttendanceListResponse;
// }
type UserProps = {
  user: UserType;
};
const Attendcard = ({ user }: UserType) => {
  const { data } = getAttence();
  const [isAttend, setIsAttend] = useState("false");
  const { name, studentInfo, id } = user;
  return (
    <>
      <S.AttendCardWrap>
        <S.AttendInfoContainer>
          <S.AttendProfileImg src={AttendProfile} alt=""></S.AttendProfileImg>
          <S.AttendName>{name}</S.AttendName>
          <S.AttendNumber>{`${studentInfo.grade}학년 ${studentInfo.room}반 ${studentInfo.number}번`}</S.AttendNumber>
          <Button
            type="primary"
            onClick={() => {
              console.log(id);
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
