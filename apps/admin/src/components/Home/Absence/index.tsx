import {
  AbsenceStudentList,
  Button,
  ButtonWrapper,
  Card,
  CardTitle,
  Flex,
} from "@checkin/ui";
import React from "react";
import { CalendarIcon } from "@checkin/icon";
import { useGetAbsencesQuery } from "@/queries/Absence/query";
import { dateTransform } from "@checkin/util";

const Absence = () => {
  const day = new Date();
  const { data } = useGetAbsencesQuery(dateTransform.hyphen(String(day)));

  return (
    <Card type="Applyout" customStyle={{ width: "41%" }}>
      <CardTitle>
        <CalendarIcon />
        결강자 승인
      </CardTitle>
      <Flex
        direction="column"
        customStyle={{ height: "100%", overflow: "auto" }}
      >
        {data?.data.map((data) => (
          <AbsenceStudentList
            grade={data.absentee?.studentInfo.grade}
            name={data.absentee?.name}
            number={data.absentee?.studentInfo.number}
            room={data.absentee?.studentInfo.room}
            reason={data?.reason}
            key={data.absenceId?.value}
          >
            <ButtonWrapper>
              <Button type="primary" customStyle={{ width: "65px" }}>
                승인
              </Button>
              <Button type="secondary" customStyle={{ width: "65px" }}>
                거절
              </Button>
            </ButtonWrapper>
          </AbsenceStudentList>
        ))}
      </Flex>
    </Card>
  );
};

export default Absence;
