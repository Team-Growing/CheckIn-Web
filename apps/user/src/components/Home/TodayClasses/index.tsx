import { Card, CardTitle } from "@checkin/ui";
import Image from "next/image";
import React from "react";
import Club from "../../../assets/Icon/Club.svg";

const TodayClasses = () => {
  return (
    <Card type="Class">
      <CardTitle>
        <Image
          width={32}
          height={32}
          src={Club.src}
          alt=""
          style={{ marginBottom: "4px" }}
        />
        오늘의 방과후
      </CardTitle>
    </Card>
  );
};

export default TodayClasses;
