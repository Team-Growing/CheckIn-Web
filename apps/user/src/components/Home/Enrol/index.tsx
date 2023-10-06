import { Card, CardTitle, Flex } from "@checkin/ui";
import React from "react";
import EnrolLectureList from "./EnrolLecturesList";
import EnrolLectureForm from "./EnrolLectureForm";
import { CalendarIcon } from "@checkin/icon";
import useAttendance from "@/hooks/Attendance/useAttendance";

const Enrol = () => {
  const {
    lectureId,
    onAttendanceLecture,
    onClickSetId,
    onChangeAttendanceCode,
  } = useAttendance();
  return (
    <Card type="Enrol">
      <CardTitle>
        <CalendarIcon />
        출석코드 입력
      </CardTitle>
      <Flex gap={20} customStyle={{ width: "100%", height: "100%" }}>
        <EnrolLectureList lectureId={lectureId} onClickSetId={onClickSetId} />
        <EnrolLectureForm
          onAttendanceLecture={onAttendanceLecture}
          onChangeAttendanceCode={onChangeAttendanceCode}
        />
      </Flex>
    </Card>
  );
};

export default Enrol;
