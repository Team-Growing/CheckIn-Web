import { Card, CardTitle, Flex } from "@checkin/ui";
import React from "react";
import EnrolLectureList from "./EnrolLecturesList";
import EnrolLectureForm from "./EnrolLectureForm";
import { CalendarIcon } from "@checkin/icon";

const Enrol = () => {
  return (
    <Card type="Enrol">
      <CardTitle>
        <CalendarIcon />
        출석코드 입력
      </CardTitle>
      <Flex gap={20} customStyle={{ width: "100%", height: "100%" }}>
        <EnrolLectureList />
        <EnrolLectureForm />
      </Flex>
    </Card>
  );
};

export default Enrol;
