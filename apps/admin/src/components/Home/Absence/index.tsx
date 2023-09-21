import { Card, CardTitle } from "@checkin/ui";
import React from "react";
import { CalendarIcon } from "@checkin/icon";

const Absence = () => {
  return (
    <Card type="Enrol">
      <CardTitle>
        <CalendarIcon />
        결강자 승인
      </CardTitle>
    </Card>
  );
};

export default Absence;
