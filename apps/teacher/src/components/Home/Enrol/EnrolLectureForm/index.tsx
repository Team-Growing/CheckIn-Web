import React from "react";
import {
  EnrolLectureCodeText,
  EnrolLectureFormContainer,
  EnrolLectureFormText,
  EnrolLectureInput,
  EnrolLecutureTextContainer,
} from "./style";
import { Button, Flex } from "@checkin/ui";
import { useGetCodeQuery } from "@/queries/AttendanceCode/query";

const EnrolLectureForm = () => {
  const { data } = useGetCodeQuery();
  return (
    <EnrolLectureFormContainer>
      <EnrolLecutureTextContainer>
        <EnrolLectureFormText>출석 코드</EnrolLectureFormText>
        <EnrolLectureCodeText>{data?.data.code}</EnrolLectureCodeText>
      </EnrolLecutureTextContainer>
      <Button customStyle={{ width: "40%" }} type="primary">
        출석코드 변경
      </Button>
    </EnrolLectureFormContainer>
  );
};

export default EnrolLectureForm;
