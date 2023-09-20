import { Card, CardTitle } from "@checkin/ui";
import Image from "next/image";
import React from "react";
import Write from "../../../assets/Icon/Write.svg";
import { WriteIcon } from "@checkin/icon";
import AbsenseForm from "./AbsenseForm";

const Absense = () => {
  return (
    <Card type="Applyout">
      <CardTitle>
        <WriteIcon />
        방과후 결강 신청
      </CardTitle>
      <AbsenseForm />
    </Card>
  );
};

export default Absense;
