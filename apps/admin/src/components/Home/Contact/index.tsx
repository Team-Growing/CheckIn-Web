import { Card, CardTitle } from "@checkin/ui";
import React from "react";
import { WriteIcon } from "@checkin/icon";
import ContactList from "./ContactList";

const Contact = () => {
  return (
    <Card type="Applyout">
      <CardTitle>
        <WriteIcon />
        담당자 문의
      </CardTitle>
      <ContactList />
    </Card>
  );
};

export default Contact;
