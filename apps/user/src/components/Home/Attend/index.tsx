import { Card, CardTitle, Flex } from "@checkin/ui";
import React from "react";
import { CalendarIcon } from "@checkin/icon";
import useAttendance from "@/hooks/Attendance/useAttendance";
import AttendList from "./AttendList";
import AttendLectureForm from "./AttendLectureForm";

const Attend = () => {
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
        <AttendList lectureId={lectureId} onClickSetId={onClickSetId} />
        <AttendLectureForm
          onAttendanceLecture={onAttendanceLecture}
          onChangeAttendanceCode={onChangeAttendanceCode}
        />
      </Flex>
    </Card>
  );
};

export default Attend;
