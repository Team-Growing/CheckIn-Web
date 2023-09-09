import React from "react";
import {
  EnrolLectureFormContainer,
  EnrolLectureFormText,
  EnrolLectureInput,
} from "./style";
import { Button, Flex } from "@checkin/ui";
const EnrolLectureForm = () => {
  return (
    <EnrolLectureFormContainer>
      <EnrolLectureFormText>출석 입력 코드</EnrolLectureFormText>
      <EnrolLectureInput />

      <Button style={{ width: "90%" }} type="primary">
        코드 입력
      </Button>
    </EnrolLectureFormContainer>
  );
};

export default EnrolLectureForm;
