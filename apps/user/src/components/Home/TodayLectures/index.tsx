import { Card, CardTitle } from "@checkin/ui";
import React from "react";
import TodayLaectureList from "./TodayLectureList";
import { LectureIcon } from "@checkin/icon";
import { useGetTodayLectures } from "@/queries/Lectures/query";

const TodayLectures = () => {
  const { data } = useGetTodayLectures();

  return (
    <Card type="Lecture">
      <CardTitle>
        <LectureIcon />
        오늘의 방과후
      </CardTitle>
      {data?.data.length === 0 && <div>오늘의 방과후는 없습니다 </div>}
      {data?.data && <TodayLaectureList data={data} />}
    </Card>
  );
};

export default TodayLectures;
