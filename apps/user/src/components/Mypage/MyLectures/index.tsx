import { LectureTagBox } from "@checkin/ui";
import React from "react";
import { MyLectusContainer } from "./style";
import { MemberLecturesResponse } from "@checkin/types";

interface Props {
  serverMemberLecturesData: MemberLecturesResponse;
}

const MyLectures = ({ serverMemberLecturesData }: Props) => {
  return (
    <>
      <MyLectusContainer>
        {serverMemberLecturesData.data.lectures.length === 0 && (
          <div>신청된 방과후가 없습니다</div>
        )}
        {serverMemberLecturesData.data.lectures.map((data) => (
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
