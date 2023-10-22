import { Button, Flex } from "@checkin/ui";
import React from "react";

const LectureSubmitButton = () => {
  return (
    <Flex justify="end" customStyle={{ marginTop: "26px" }}>
      <Button customStyle={{ width: "200px" }} type="primary">
        생성하기
      </Button>
    </Flex>
  );
};

export default LectureSubmitButton;
