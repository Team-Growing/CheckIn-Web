import { LectureTagBox } from "@checkin/ui";
import React from "react";
import { MyLectusContainer } from "./style";
import { LecturesResponse } from "@checkin/types";

interface Props {
  serverMemberLecturesData: LecturesResponse;
}

const MyLectures = ({ serverMemberLecturesData }: Props) => {
  return (
    <>
      <MyLectusContainer>
        {serverMemberLecturesData.data.length === 0 && (
          <div>신청된 방과후가 없습니다</div>
        )}
        {serverMemberLecturesData.data.map((data) => (
          <LectureTagBox
            key={data.lectureId.value}
            lectureTag={data.lectureTag}
            type="Enrol"
            grade={data.acceptableStudent.targetGrade}
            people={data.enrollStudent}
            place={data.placeType}
            teacher={data.lectureTeacher.name}
            title={data.lectureName}
          />
        ))}
      </MyLectusContainer>
    </>
  );
};

export default MyLectures;
