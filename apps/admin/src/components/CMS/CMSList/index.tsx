import { useGetLecturesByStatus } from "@/queries/Lecture/query";
import { LectureTagBox } from "@checkin/ui";
import React from "react";

interface Props {
  status: string;
}

const LecturesList = ({ status }: Props) => {
  const { data } = useGetLecturesByStatus({ status, grade: 2 });
  return (
    <>
      {data?.data.map((data) => (
        <LectureTagBox
          grade={String(data.acceptableStudent.targetGrade)}
          lectureTag={data.lectureTag}
          people={String(data.enrollStudent)}
          place={data.placeType}
          teacher={data.lectureTeacher.name}
          title={data.lectureName}
          type="Enrol"
        />
      ))}
    </>
  );
};

export default LecturesList;
