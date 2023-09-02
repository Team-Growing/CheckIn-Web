import { Card, CardTitle } from "@checkin/ui";
import Image from "next/image";
import React from "react";
import Write from "../../../assets/Icon/Write.svg";

const Applyout = () => {
  return (
    <Card type="Applyout">
      <CardTitle>
        <Image
          width={32}
          height={32}
          src={Write.src}
          alt=""
          style={{ marginBottom: "4px" }}
        />
        방과후 결강 신청
      </CardTitle>
    </Card>
  );
};

export default Applyout;
