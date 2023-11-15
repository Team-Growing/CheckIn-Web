import { LectureTagBox } from "@checkin/ui";
import React from "react";
import { useGetAllLecturesQuery } from "@/queries/Lectures/query";

interface Props {
  status: string;
  lectureIdList: number[];
  onChangeLectureIdList: (id: number) => void;
  grade: number;
}

const LecturesList = ({
  status,
  onChangeLectureIdList,
  lectureIdList,
  grade,
}: Props) => {
  const { data } = useGetAllLecturesQuery(grade);

  return (
    <>
      {data?.data
        .filter((lecture) => lecture.lectureStatus === status)
        .map((data) => (
          <LectureTagBox
            key={data.lectureId.value}
            grade={data.acceptableStudent.targetGrade}
            lectureTag={data.lectureTag}
            people={data.enrollStudent}
            place={data.placeType}
            teacher={data.lectureTeacher.name}
            title={data.lectureName}
            isSelect={
              lectureIdList.includes(data.lectureId.value) ? true : false
            }
            onSelect={() => onChangeLectureIdList(data.lectureId.value)}
            type="Enrol"
          />
        ))}
    </>
  );
};

export default LecturesList;
