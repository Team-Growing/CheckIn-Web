import { Card, CardTitle } from "@checkin/ui";
import React from "react";
import QuestionForm from "./QuestionForm";
import { WriteIcon } from "@checkin/icon";

const Applyout = () => {
  return (
    <Card type="Applyout">
      <CardTitle>
        <WriteIcon />
        담당자 문의
      </CardTitle>
      <QuestionForm />
    </Card>
  );
};

export default Applyout;
