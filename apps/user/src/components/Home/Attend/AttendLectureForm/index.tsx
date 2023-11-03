import React from "react";
import {
  EnrolLectureFormContainer,
  EnrolLectureFormText,
  EnrolLectureInput,
} from "./style";
import { Button } from "@checkin/ui";

interface Props {
  onAttendanceLecture: (e: React.FormEvent<HTMLFormElement>) => void;
  onChangeAttendanceCode: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AttendLectureForm = ({
  onAttendanceLecture,
  onChangeAttendanceCode,
}: Props) => {
  return (
    <EnrolLectureFormContainer onSubmit={onAttendanceLecture}>
      <EnrolLectureFormText>출석 입력 코드</EnrolLectureFormText>
      <EnrolLectureInput onChange={onChangeAttendanceCode} />
      <Button customStyle={{ width: "90%" }} type="primary">
        코드 입력
      </Button>
    </EnrolLectureFormContainer>
  );
};

export default AttendLectureForm;
