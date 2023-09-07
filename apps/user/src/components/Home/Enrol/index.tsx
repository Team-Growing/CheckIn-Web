import { Card, CardTitle } from "@checkin/ui";
import Image from "next/image";
import React from "react";
import CalendarImg from "../../../assets/Icon/Calendar.svg";

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
    </Card>
  );
};

export default Enrol;
