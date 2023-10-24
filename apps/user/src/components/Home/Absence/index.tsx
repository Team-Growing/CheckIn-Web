import { Card, CardTitle } from "@checkin/ui";
import React from "react";
import { WriteIcon } from "@checkin/icon";
import AbsenceForm from "./AbsenceForm";

const Absense = () => {
  return (
    <Card type="Applyout">
      <CardTitle>
        <WriteIcon />
        방과후 결강 신청
      </CardTitle>
      <AbsenceForm />
    </Card>
  );
};

export default Absense;
