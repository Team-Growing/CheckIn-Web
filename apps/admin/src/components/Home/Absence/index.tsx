import { AbsenceStudentList, Button, Card, CardTitle, Flex } from "@checkin/ui";
import React from "react";
import { CalendarIcon } from "@checkin/icon";

const Absence = () => {
  return (
    <Card type="Applyout">
      <CardTitle customStyle={{ marginTop: "21px", marginLeft: "62px" }}>
        <CalendarIcon />
        결강자 승인
      </CardTitle>
      <Flex
        direction="column"
        customStyle={{ height: "auto", overflow: "auto" }}
      >
        {Array.from({ length: 10 }).map(() => (
          <AbsenceStudentList
            grade="2"
            room="1"
            number="12"
            name="백승하"
            reason="몸이 별로 안좋아서 병원 다녀오겠습니다...."
          >
            <Button type="primary">결강승인</Button>
          </AbsenceStudentList>
        ))}
      </Flex>
    </Card>
  );
};

export default Absence;
