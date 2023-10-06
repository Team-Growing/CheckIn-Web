import React from "react";
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

const SMS = () => {
  const { data } = useGetAttendanceListQuery(1);
  console.log(data);

  const onChange = () => {};
  return (
    <S.CheckAttendanceContainer>
      <SectionHeader
        title="방과후 출석확인"
        subTitle="after-school attendance check"
      />
      <Select
        name="gd"
        items={["자바", "파이썬 ", "C언어 "]}
        onChange={onChange}
        value="방과후 이름"
        customStyle={{ marginTop: "26px", background: "#fff" }}
      />
      <Flex direction="column" gap={10} customStyle={{ marginTop: "32px" }}>
        <TitleText>출석한 학생</TitleText>
        <Box>
          {Array.from({ length: 10 }).map(() => (
            <AttendanceStudent grade="2" name="백승하" number="12" room="1">
              <Button type="primary" customStyle={{ width: "100px" }}>
                출석
              </Button>
            </AttendanceStudent>
          ))}
        </Box>
      </Flex>
      <Flex direction="column" gap={10} customStyle={{ marginTop: "52px" }}>
        <TitleText>미출석한 학생</TitleText>
        <Box>
          {Array.from({ length: 10 }).map(() => (
            <AttendanceStudent grade="2" name="백승하" number="12" room="1">
              <Button
                type="unSelect"
                customStyle={{ backgroundColor: "#fff", width: "100px" }}
              >
                미출석
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
