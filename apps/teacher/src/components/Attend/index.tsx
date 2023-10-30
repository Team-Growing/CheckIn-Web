import React, { useState } from "react";
import * as S from "./style";
import AttendIcon from "../../assets/image/AttendTitleIcon.svg";
import { AttendanceStudent, Button, ButtonWrapper } from "@checkin/ui";
import { useGetAttendantsQuery } from "@/queries/AttendanceCode/query";
import { useGetMyLectures } from "@/queries/Lectures/query";
import useChangeAttendanceStatus from "@/hooks/Attendance/useChangeAttendanceStatus";
export type UserType = {
  id: number;
  name: string;
  age: number;
  position: string;
};
const Attend = () => {
  const { data: myLecturesData } = useGetMyLectures();

  const [lectureId, setLectureId] = useState(0);

  const { data: attendanceListData } = useGetAttendantsQuery(lectureId!);
  const {
    onChangeAttendanceStatusConfirm,
    onChangeAttendanceStatusCancel,
  } = useChangeAttendanceStatus();
  return (
    <>
      <S.AttendWrap>
        <S.AttendTitleContainer>
          <S.AttendIconImg src={AttendIcon} alt=""></S.AttendIconImg>
          <S.AttendTitle>방과후 출석 확인</S.AttendTitle>
          <S.AttendSubtitle>after-school attendance check</S.AttendSubtitle>
        </S.AttendTitleContainer>
        <ButtonWrapper>
          {myLecturesData?.data.map((data) => (
            <Button
              type="primary"
              isSelect={lectureId === data.lectureId.value ? false : true}
              onClick={() => setLectureId(data.lectureId.value)}
            >
              {data.lectureName}
            </Button>
          ))}
        </ButtonWrapper>
        <S.AttendStudentTitle>출석 한 학생</S.AttendStudentTitle>
        <S.AttendListWrapper>
          {attendanceListData?.data.attendants.map((data) => (
            <AttendanceStudent
              grade={data.studentInfo.grade}
              name={data.name}
              number={data.studentInfo.number}
              room={data.studentInfo.room}
            >
              <Button
                type="unSelect"
                onClick={() =>
                  onChangeAttendanceStatusCancel({
                    lectureId,
                    memberId: data.id,
                  })
                }
              >
                출석 취소
              </Button>
            </AttendanceStudent>
          ))}
        </S.AttendListWrapper>
        <S.AttendStudentTitle>미출석 한 학생</S.AttendStudentTitle>
        <S.AttendListWrapper>
          {attendanceListData?.data.nonAttendants.map((data) => (
            <AttendanceStudent
              grade={data.studentInfo.grade}
              name={data.name}
              number={data.studentInfo.number}
              room={data.studentInfo.room}
            >
              <Button
                type="primary"
                onClick={() =>
                  onChangeAttendanceStatusConfirm({
                    lectureId,
                    memberId: data.id,
                  })
                }
              >
                출석
              </Button>
            </AttendanceStudent>
          ))}
        </S.AttendListWrapper>
      </S.AttendWrap>
    </>
  );
};

export default Attend;
