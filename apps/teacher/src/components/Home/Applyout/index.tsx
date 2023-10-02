import { Card, CardTitle } from "@checkin/ui";
import Image from "next/image";
import React from "react";
import Write from "../../../assets/Icon/Write.svg";
import ApplyoutForm from "./ApplyoutForm";

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
        담당자 문의
      </CardTitle>
      <ApplyoutForm />
    </Card>
  );
};

export default Applyout;
