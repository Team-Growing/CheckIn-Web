import { Card, CardTitle } from "@checkin/ui";
import React from "react";
import { WriteIcon } from "@checkin/icon";
import ContactList from "./ContactList";
import styled from "styled-components";

const Contact = () => {
  return (
    <Card type="Enrol">
      <CardTitle>
        <WriteIcon />
        담당자 문의
      </CardTitle>
      <Container>
        <ContactList />
      </Container>
    </Card>
  );
};

export default Contact;

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  margin-top: 20px;

  ::-webkit-scrollbar {
    display: none;
  }
`;
