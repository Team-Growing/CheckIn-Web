import { Card, CardTitle } from "@checkin/ui";
import Image from "next/image";
import React from "react";
import NotifictionImg from "../../../assets/Icon/Notifiction.svg";

const Notifiction = () => {
  return (
    <Card
      type="Notifiction"
      customStyle={{ display: "flex", columnGap: "63px" }}
    >
      <CardTitle>
        <Image
          width={32}
          height={32}
          src={NotifictionImg.src}
          alt=""
          style={{ marginBottom: "4px" }}
        />
        공지사항
      </CardTitle>
    </Card>
  );
};

export default Notifiction;
