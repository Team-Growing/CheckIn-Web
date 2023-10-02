import { Card, CardTitle, Flex, Button } from "@checkin/ui";
import Image from "next/image";
import React from "react";
import CalendarImg from "../../../assets/Icon/Calendar.svg";
import EnrolLectureList from "./EnrolLecturesList";
import EnrolLectureForm from "./EnrolLectureForm";
import { EnrolLectureButtonContainer } from "./EnrolLectureForm/style";

const Enrol = () => {
  return (
    <Card
      type="Enrol"
      customStyle={{
        padding: 20,
      }}
    >
      <CardTitle>
        <Image
          width={32}
          height={32}
          src={CalendarImg.src}
          alt=""
          style={{ marginBottom: "4px" }}
        />
        출석코드 생성
      </CardTitle>
      <EnrolLectureButtonContainer>
        <Button style={{ width: "15%" }} type="primary">
          테니스A
        </Button>
        <Button style={{ width: "15%" }} type="unSelect">
          테니스B
        </Button>
      </EnrolLectureButtonContainer>
      <Flex
        gap={20}
        justify="center"
        align="center"
        customStyle={{
          width: "100%",
          height: "100%",
        }}
      >
        <EnrolLectureForm />
      </Flex>
    </Card>
  );
};

export default Enrol;
