import React, { useState } from "react";
import * as S from "./style";
import AttendIcon from "../../assets/image/AttendTitleIcon.svg";
import { AttendanceStudent, Button, ButtonWrapper, Flex } from "@checkin/ui";
import { useGetAttendantsQuery } from "@/queries/AttendanceCode/query";
import { useGetTodayMyLecturesQuery } from "@/queries/Lectures/query";
import useChangeAttendanceStatus from "@/hooks/Attendance/useChangeAttendanceStatus";
import { useRouter } from "next/router";
export type UserType = {
  id: number;
  name: string;
  age: number;
  position: string;
};

const Attend = () => {
  const router = useRouter();

  const { data: myLecturesData } = useGetTodayMyLecturesQuery();
  const { data: attendanceListData } = useGetAttendantsQuery(
    Number(router.query.id)
  );

  const { onChangeAttendanceStatusConfirm, onChangeAttendanceStatusCancel } =
    useChangeAttendanceStatus();

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
              key={data.lectureId.value}
              type="primary"
              isSelect={
                Number(router.query.id) === data.lectureId.value ? false : true
              }
              onClick={() => router.replace(String(data.lectureId.value))}
            >
              {data.lectureName}
            </Button>
          ))}
        </ButtonWrapper>
        <Flex direction="column" gap={10} customStyle={{ marginTop: "32px" }}>
          <S.AttendStudentTitle>출석 한 학생</S.AttendStudentTitle>
          <S.AttendListWrapper>
            {attendanceListData?.data.attendants.map((data) => (
              <AttendanceStudent
                key={data.id}
                grade={data.studentInfo.grade}
                name={data.name}
                number={data.studentInfo.number}
                room={data.studentInfo.room}
              >
                <Button
                  customStyle={{ width: "150px" }}
                  type="unSelect"
                  onClick={() =>
                    onChangeAttendanceStatusCancel({
                      lectureId: Number(router.query.id),
                      memberId: data.id,
                    })
                  }
                >
                  출석 취소
                </Button>
              </AttendanceStudent>
            ))}
          </S.AttendListWrapper>
        </Flex>
        <Flex direction="column" gap={10} customStyle={{ marginTop: "52px" }}>
          <S.AttendStudentTitle>미출석 한 학생</S.AttendStudentTitle>
          <S.AttendListWrapper>
            {attendanceListData?.data.nonAttendants.map((data) => (
              <AttendanceStudent
                key={data.id}
                grade={data.studentInfo.grade}
                name={data.name}
                number={data.studentInfo.number}
                room={data.studentInfo.room}
              >
                <Button
                  type="primary"
                  customStyle={{ width: "150px" }}
                  onClick={() =>
                    onChangeAttendanceStatusConfirm({
                      lectureId: Number(router.query.id),
                      memberId: data.id,
                    })
                  }
                >
                  출석
                </Button>
              </AttendanceStudent>
            ))}
          </S.AttendListWrapper>
        </Flex>
        <Flex direction="column" gap={10} customStyle={{ marginTop: "52px" }}>
          <S.AttendStudentTitle>결강한 학생</S.AttendStudentTitle>
          <S.AttendListWrapper>
            {attendanceListData?.data.absentees.map((data) => (
              <AttendanceStudent
                key={data.id}
                grade={data.studentInfo.grade}
                name={data.name}
                number={data.studentInfo.number}
                room={data.studentInfo.room}
              >
                <Button
                  customStyle={{ width: "150px" }}
                  type="unSelect"
                  onClick={() =>
                    onChangeAttendanceStatusCancel({
                      lectureId: Number(router.query.id),
                      memberId: data.id,
                    })
                  }
                >
                  결강중
                </Button>
              </AttendanceStudent>
            ))}
          </S.AttendListWrapper>
        </Flex>
      </S.AttendWrap>
    </>
  );
};

export default Attend;
