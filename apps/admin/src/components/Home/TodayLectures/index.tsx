import { Card, CardTitle } from "@checkin/ui";
import React from "react";
import { LectureIcon } from "@checkin/icon";
import TodayLecturesList from "./TodayLectureList";
import { useGetTodayLecturesQuery } from "@/queries/Lecture/query";

const TodayLectures = () => {
  const { data } = useGetTodayLecturesQuery();

  return (
    <Card type="Lecture">
      <CardTitle>
        <LectureIcon />
        오늘의 방과후
      </CardTitle>
      {data?.data.length === 0 && <div>오늘의 방과후는 없습니다 </div>}
      {data?.data && <TodayLecturesList data={data} />}
    </Card>
  );
};

export default TodayLectures;
