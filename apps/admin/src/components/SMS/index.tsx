import * as S from "./style";
import {
  AttendanceStudent,
  Button,
  Flex,
  SectionHeader,
  Select,
  TitleText,
} from "@checkin/ui";
import styled from "styled-components";
import { useGetAttendanceListQuery } from "@/queries/Attendance/query";
import { useGetTodayLecturesQuery } from "@/queries/Lectures/query";
import { useState } from "react";
import useChangeAttendanceStatus from "@/hooks/Attendance/useChangeAttendanceStatus";

const SMS = () => {
  const [lectureId, setLectureId] = useState(0);
  const [lectureName, setLectureName] = useState("");

  const getLectureId = (name: string, value: string) => {
    setLectureName(value);
    const lectureId = todayLectures?.find(
      (lectures) => lectures.lectureName === value
    )?.lectureId.value!;
    setLectureId(lectureId);
  };

  const todayLectures = useGetTodayLecturesQuery().data?.data;
  const { data: attendanceListData } = useGetAttendanceListQuery(lectureId);

  const { onChangeAttendanceStatusCancel, onChangeAttendanceStatusConfirm } =
    useChangeAttendanceStatus();

  return (
    <S.CheckAttendanceContainer>
      <SectionHeader
        title="방과후 출석확인"
        subTitle="after-school attendance check"
      />
      <Select
        name="lectureId"
        items={todayLectures?.map((data) => data.lectureName)!}
        onChange={getLectureId}
        value={lectureName}
        placeholder="방과후 이름"
        customStyle={{ marginTop: "26px", background: "#fff" }}
      />
      <Flex direction="column" gap={10} customStyle={{ marginTop: "32px" }}>
        <TitleText>출석한 학생</TitleText>
        <Box>
          {attendanceListData?.data.attendants.map((data) => (
            <AttendanceStudent
              key={data.id}
              grade={data.studentInfo.grade}
              name={data.name}
              number={data.studentInfo.number}
              room={data.studentInfo.room}
            >
              <Button
                onClick={() =>
                  onChangeAttendanceStatusCancel({
                    lectureId,
                    memberId: data.id,
                  })
                }
                customStyle={{ width: "150px" }}
                type="unSelect"
              >
                출석 취소
              </Button>
            </AttendanceStudent>
          ))}
        </Box>
      </Flex>
      <Flex direction="column" gap={10} customStyle={{ marginTop: "52px" }}>
        <TitleText>미출석한 학생</TitleText>
        <Box>
          {attendanceListData?.data.nonAttendants.map((data) => (
            <AttendanceStudent
              key={data.id}
              grade={data.studentInfo.grade}
              name={data.name}
              number={data.studentInfo.number}
              room={data.studentInfo.room}
            >
              <Button
                customStyle={{ width: "150px" }}
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
        </Box>
      </Flex>
      <Flex direction="column" gap={10} customStyle={{ marginTop: "52px" }}>
        <TitleText>결강한 학생</TitleText>
        <Box>
          {attendanceListData?.data.absentees.map((data) => (
            <AttendanceStudent
              key={data.id}
              grade={data.studentInfo.grade}
              name={data.name}
              number={data.studentInfo.number}
              room={data.studentInfo.room}
            >
              <Button customStyle={{ width: "150px" }} type="unSelect">
                결강중
              </Button>
            </AttendanceStudent>
          ))}
        </Box>
      </Flex>
    </S.CheckAttendanceContainer>
  );
};

export default SMS;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 12px;
`;
