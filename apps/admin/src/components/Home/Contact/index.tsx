import { Card, CardTitle, Flex } from "@checkin/ui";
import React from "react";
import { WriteIcon } from "@checkin/icon";
import ContactList from "./ContactList";
import styled from "styled-components";
import Link from "next/link";

const Contact = () => {
  return (
    <Card type="Enrol" customStyle={{ width: "50%" }}>
      <Flex justify="between" align="center">
        <CardTitle>
          <WriteIcon />
          담당자 문의
        </CardTitle>
        <Link href="/ask/confirm">더보기</Link>
      </Flex>
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
