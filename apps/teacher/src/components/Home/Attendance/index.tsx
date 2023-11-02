import { Card, CardTitle, Flex, Button } from "@checkin/ui";
import Image from "next/image";
import React, { useState } from "react";
import CalendarImg from "../../../assets/Icon/Calendar.svg";
import { useGetTodayMyLecturesQuery } from "@/queries/Lectures/query";
import AttendanceCode from "./AttendanceCode";
import { EnrolLectureButtonContainer } from "./AttendanceCode/style";

const Enrol = () => {
  const [lectureId, setLectureId] = useState(0);
  const { data } = useGetTodayMyLecturesQuery();
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
        {data?.data.map((data) => (
          <Button
            key={data.lectureId.value}
            onClick={() => setLectureId(data.lectureId.value)}
            customStyle={{ width: "15%" }}
            type="secondary"
            isSelect={lectureId === data.lectureId.value ? true : false}
          >
            {data.lectureName}
          </Button>
        ))}
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
        <AttendanceCode lectureId={lectureId} />
      </Flex>
    </Card>
  );
};

export default Enrol;
