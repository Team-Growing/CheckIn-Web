import { Button, Flex } from "@checkin/ui";
import React from "react";

const GenerateButton = () => {
  return (
    <Flex justify="end" customStyle={{ marginTop: "26px" }}>
      <Button style={{ width: "200px" }} type="primary">
        생성하기
      </Button>
    </Flex>
  );
};

export default GenerateButton;
