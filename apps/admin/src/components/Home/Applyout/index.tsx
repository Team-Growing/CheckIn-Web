import { Card, CardTitle } from "@checkin/ui";
import Image from "next/image";
import React from "react";
import ApplyoutForm from "./ApplyoutForm";
import { WriteIcon } from "@checkin/icon";
const Applyout = () => {
  return (
    <Card type="Applyout">
      <CardTitle>
        <WriteIcon />
        담당자 문의
      </CardTitle>
      <ApplyoutForm />
    </Card>
  );
};

export default Applyout;
