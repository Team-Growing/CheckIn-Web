import React, { useState } from "react";
import * as S from "./style";
import AttendIcon from "../../../assets/image/AttendTitleIcon.svg";
import AttendProfile from "../../../../assets/image/AttendCardProfile.svg";
import { Button } from "@checkin/ui";
import { AttendanceListResponse } from "@checkin/types";
import { UserType } from "..";
import {
  useGetAttendanceMutation,
  useGetAttendantsQuery,
} from "@/queries/AttendanceCode/query";
import useCheckAttendance from "@/hooks/Attendance/useCheckAttendance.ts";

// interface Props {
//   data: AttendanceListResponse;
// }
type UserProps = {
  user: UserType;
};
const AttendCompletedcard = ({ user }: UserType) => {
  const {
    attendanceData,
    onClickAttendanceData,
    onSubmitAttendanceData,
  } = useCheckAttendance();

  const [isAttend, setIsAttend] = useState("false");
  const { name, studentInfo, id } = user;

  return (
    <>
      <S.AttendCardWrap>
        <S.AttendInfoContainer>
          <S.AttendProfileImg src={AttendProfile} alt=""></S.AttendProfileImg>
          <S.AttendName>{name}</S.AttendName>
          <S.AttendNumber>{`${studentInfo.grade}학년 ${studentInfo.room}반 ${studentInfo.number}번`}</S.AttendNumber>
          <button
            type="primary"
            value={id}
            name="id"
            onClick={onClickAttendanceData}
          >
            출석취소
          </button>
        </S.AttendInfoContainer>
      </S.AttendCardWrap>
    </>
  );
};

export default AttendCompletedcard;
