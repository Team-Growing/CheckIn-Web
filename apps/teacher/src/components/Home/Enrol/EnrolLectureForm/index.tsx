import React from "react";
import {
  EnrolLectureCodeText,
  EnrolLectureForm,
  EnrolLectureFormContainer,
  EnrolLectureFormText,
  EnrolLectureInput,
  EnrolLecutureTextContainer,
} from "./style";
import { Button, Flex } from "@checkin/ui";
import {
  useChangeCodeMutation,
  useGetCodeQuery,
} from "@/queries/AttendanceCode/query";

const EnrolLecture = () => {
  const { data } = useGetCodeQuery();

  const onClickChangeHandler = () => {
    console.log("변경");
    useChangeCodeMutation();
  };
  return (
    <>
      <EnrolLectureFormContainer>
        <EnrolLectureForm>
          <EnrolLecutureTextContainer>
            <EnrolLectureFormText>출석 코드</EnrolLectureFormText>
            <EnrolLectureCodeText>{data?.data.code}</EnrolLectureCodeText>
          </EnrolLecutureTextContainer>
        </EnrolLectureForm>
        <Button
          customStyle={{ width: "40%" }}
          type="primary"
          onClick={onClickChangeHandler}
        >
          출석코드 변경
        </Button>
      </EnrolLectureFormContainer>
    </>
  );
};

export default EnrolLecture;
