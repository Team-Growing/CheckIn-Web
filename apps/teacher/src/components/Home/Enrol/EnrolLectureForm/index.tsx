import React from "react";
import {
  EnrolLectureCodeText,
  EnrolLectureFormContainer,
  EnrolLectureFormText,
  EnrolLectureInput,
  EnrolLecutureTextContainer,
} from "./style";
import { Button, Flex } from "@checkin/ui";

const EnrolLectureForm = () => {
  return (
    <EnrolLectureFormContainer>
      <EnrolLecutureTextContainer>
        <EnrolLectureFormText>출석 코드</EnrolLectureFormText>
        <EnrolLectureCodeText>9292</EnrolLectureCodeText>
      </EnrolLecutureTextContainer>
      <Button customStyle={{ width: "40%" }} type="primary">
        출석코드 변경
      </Button>
    </EnrolLectureFormContainer>
  );
};

export default EnrolLectureForm;
