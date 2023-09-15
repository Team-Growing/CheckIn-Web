import { Card, CardTitle } from "@checkin/ui";
import Image from "next/image";
import React from "react";
import Write from "../../../assets/Icon/Write.svg";
import ApplyoutForm from "./ApplyoutForm";
import { WriteIcon } from "@checkin/icon";

const Applyout = () => {
  return (
    <Card type="Applyout">
      <CardTitle>
        <WriteIcon />
        방과후 결강 신청
      </CardTitle>
      <ApplyoutForm />
    </Card>
  );
};

export default Applyout;
