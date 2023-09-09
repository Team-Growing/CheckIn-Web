import { Card, CardTitle, Flex } from "@checkin/ui";
import Image from "next/image";
import React from "react";
import CalendarImg from "../../../assets/Icon/Calendar.svg";
import EnrolLectureList from "./EnrolLecturesList";
import EnrolLectureForm from "./EnrolLectureForm";

const Enrol = () => {
  return (
    <Card type="Enrol">
      <CardTitle>
        <Image
          width={32}
          height={32}
          src={CalendarImg.src}
          alt=""
          style={{ marginBottom: "4px" }}
        />
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
