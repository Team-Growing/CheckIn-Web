import { Card, CardTitle } from "@checkin/ui";
import Image from "next/image";
import React from "react";
import NotifictionImg from "../../../assets/Icon/Notifiction.svg";
import { NotifictionIcon } from "@checkin/icon";

const Notifiction = () => {
  return (
    <Card
      type="Notifiction"
      customStyle={{ display: "flex", columnGap: "63px" }}
    >
      <CardTitle>
        <NotifictionIcon />
        공지사항
      </CardTitle>
    </Card>
  );
};

export default Notifiction;
