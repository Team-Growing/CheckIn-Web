import { Card, CardTitle } from "@checkin/ui";
import Image from "next/image";
import React from "react";
import CalendarImg from "../../../assets/Icon/Calendar.svg";

const Calendar = () => {
  return (
    <Card type="Calendar">
      <CardTitle>
        <Image
          width={32}
          height={32}
          src={CalendarImg.src}
          alt=""
          style={{ marginBottom: "4px" }}
        />
        방과후 결강 신청
      </CardTitle>
    </Card>
  );
};

export default Calendar;
