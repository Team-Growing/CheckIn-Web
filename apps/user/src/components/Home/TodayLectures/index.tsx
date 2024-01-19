import React from "react";
import TodayLaectureList from "./TodayLectureList";
import { useGetTodayLectures } from "@/queries/Lectures/query";
import { LectureListWrapper } from "./TodayLectureList/style";
import { LectureBox } from "@checkin/ui";

const TodayLectures = () => {
  const { data } = useGetTodayLectures({ suspense: true });

  return (
    <>
      {data?.data.length === 0 ? (
        <div>오늘의 방과후는 없습니다 </div>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <LectureListWrapper>
            <div style={{ display: "flex", columnGap: "20px" }}>
              {data?.data.map((data) => (
                <LectureBox
                  key={data.lectureId.value}
                  grade={data.acceptableStudent.targetGrade}
                  lectureTag={data.lectureTag}
                  people={data.enrollStudent}
                  place={data.placeType}
                  teacher={data.lectureTeacher.name}
                  title={data.lectureName}
                />
              ))}
            </div>
          </LectureListWrapper>
        </div>
      )}
    </>
  );
};

export default TodayLectures;
