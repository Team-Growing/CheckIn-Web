import { Card, CardTitle } from "@checkin/ui";
import React from "react";
import { WriteIcon } from "@checkin/icon";
import ContactList from "./ContactList";

const Contact = () => {
  return (
    <Card type="Enrol">
      <CardTitle>
        <WriteIcon />
        담당자 문의
      </CardTitle>
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "auto",
          marginTop: "20px",
        }}
      >
        <ContactList />
      </div>
    </Card>
  );
};

export default Contact;
