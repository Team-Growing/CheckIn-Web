import React from "react";
import {
  EnrolLectureCodeText,
  EnrolLectureFormContainer,
  EnrolLectureFormText,
  EnrolLectureInput,
  EnrolLecutureTextContainer,
} from "./style";
import { Button, Flex } from "@checkin/ui";
import { useGetCode } from "@/hooks/Main/getCode";

const EnrolLectureForm = () => {
  const { data, isLoading, isError } = useGetCode();
  return (
    <EnrolLectureFormContainer>
      <EnrolLecutureTextContainer>
        <EnrolLectureFormText>출석 코드</EnrolLectureFormText>
        <EnrolLectureCodeText>
          {JSON.stringify(data, null, 2)}
        </EnrolLectureCodeText>
      </EnrolLecutureTextContainer>
      <Button style={{ width: "40%" }} type="primary">
        출석코드 변경
      </Button>
    </EnrolLectureFormContainer>
  );
};

export default EnrolLectureForm;
