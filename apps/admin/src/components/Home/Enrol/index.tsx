import { Button, ButtonWrapper, Card, CardTitle } from "@checkin/ui";
import React from "react";
import Form from "./Form";
import { CalendarIcon } from "@checkin/icon";

const Enrol = () => {
  return (
    <Card type="Enrol">
      <CardTitle>
        <CalendarIcon />
        출석코드 생성
      </CardTitle>
      <ButtonWrapper>
        <Button type="primary">테니스 A</Button>
        <Button type="unSelect">테니스 B</Button>
      </ButtonWrapper>
      <Form />
    </Card>
  );
};

export default Enrol;
