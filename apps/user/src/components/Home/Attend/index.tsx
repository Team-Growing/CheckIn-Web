import { Card, CardTitle, Flex } from "@checkin/ui";
import React from "react";
import { CalendarIcon } from "@checkin/icon";
import useAttendance from "@/hooks/Attendance/useAttendance";
import AttendList from "./AttendList";
import AttendLectureForm from "./AttendLectureForm";
import { useGetTodayMyLecturesQuery } from "@/queries/Lectures/query";

const Attend = () => {
  const {
    attendanceCode,
    lectureId,
    onAttendanceLecture,
    onClickSetId,
    onChangeAttendanceCode,
  } = useAttendance();
  const { data } = useGetTodayMyLecturesQuery();

  return (
    <Card type="Enrol">
      <CardTitle>
        <CalendarIcon />
        출석코드 입력
      </CardTitle>
      {data?.data.length === 0 ? (
        <>오늘은 방과후가 없습니다</>
      ) : (
        <Flex gap={20} customStyle={{ width: "100%", height: "100%" }}>
          <AttendList
            data={data!}
            lectureId={lectureId}
            onClickSetId={onClickSetId}
          />
          <AttendLectureForm
            attendanceCode={attendanceCode}
            onAttendanceLecture={onAttendanceLecture}
            onChangeAttendanceCode={onChangeAttendanceCode}
          />
        </Flex>
      )}
    </Card>
  );
};

export default Attend;
