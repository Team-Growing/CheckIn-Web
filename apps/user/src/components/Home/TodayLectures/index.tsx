import { Card, CardTitle } from "@checkin/ui";
import React from "react";
import TodayLaectureList from "./TodayLectureList";
import { LectureIcon } from "@checkin/icon";
import { useGetTodayLectures } from "@/queries/Lectures/query";

const TodayLectures = () => {
  const { data } = useGetTodayLectures();
  console.log(data);

  return (
    <Card type="Lecture">
      <CardTitle>
        <LectureIcon />
        오늘의 방과후
      </CardTitle>
      {data?.data ? (
        <TodayLaectureList data={data} />
      ) : (
        <div>오늘의 방과후는 없습니다</div>
      )}
    </Card>
  );
};

export default TodayLectures;
