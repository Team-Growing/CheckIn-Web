import { Card, CardTitle } from "@checkin/ui";
import React from "react";
import { LectureIcon } from "@checkin/icon";
import TodayLecturesList from "./TodayLectureList";

const TodayLectures = () => {
  return (
    <Card type="Lecture">
      <CardTitle>
        <LectureIcon />
        오늘의 방과후
      </CardTitle>
      <TodayLecturesList />
    </Card>
  );
};

export default TodayLectures;
