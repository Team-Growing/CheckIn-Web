import * as S from "./style";
import { Flex, SectionHeader, Select, TitleText } from "@checkin/ui";
import styled from "styled-components";
import { useGetAttendanceListQuery } from "@/queries/Attendance/query";
import { useGetTodayLecturesQuery } from "@/queries/Lecture/query";
import { useState } from "react";

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
  const { data } = useGetAttendanceListQuery(lectureId);

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
        <Box></Box>
      </Flex>
      <Flex direction="column" gap={10} customStyle={{ marginTop: "52px" }}>
        <TitleText>미출석한 학생</TitleText>
        <Box></Box>
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
