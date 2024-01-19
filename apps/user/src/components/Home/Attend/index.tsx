"use client";

import { Card, CardTitle, Flex } from "@checkin/ui";
import React, { Suspense } from "react";
import useAttendance from "@/hooks/Attendance/useAttendance";
import AttendList from "./AttendList";
import AttendLectureForm from "./AttendLectureForm";
import { CalendarIcon } from "@checkin/icon";

const Attend = () => {
  const {
    attendanceCode,
    lectureId,
    onAttendanceLecture,
    onClickSetId,
    onChangeAttendanceCode,
  } = useAttendance();

  return (
    <>
      <Card type="Enrol">
        <CardTitle>
          <CalendarIcon />
          출석코드 입력
        </CardTitle>
        <Flex gap={20} customStyle={{ width: "100%", height: "100%" }}>
          <Suspense fallback={<span>loading...</span>}>
            <AttendList lectureId={lectureId} onClickSetId={onClickSetId} />
          </Suspense>
          <AttendLectureForm
            attendanceCode={attendanceCode}
            onAttendanceLecture={onAttendanceLecture}
            onChangeAttendanceCode={onChangeAttendanceCode}
          />
        </Flex>
      </Card>
    </>
  );
};

export default Attend;
