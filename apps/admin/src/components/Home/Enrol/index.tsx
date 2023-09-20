import { Button, ButtonWrapper, Card, CardTitle } from "@checkin/ui";
import React from "react";
import Form from "./Form";
import { CalendarIcon } from "@checkin/icon";

const Enrol = () => {
  return (
    <Card type="Enrol">
      <CardTitle>
        <CalendarIcon />
        결강자 승인
      </CardTitle>
    </Card>
  );
};

export default Enrol;
