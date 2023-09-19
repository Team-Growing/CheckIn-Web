import { Card, CardTitle } from "@checkin/ui";
import React from "react";
import TodayLaectureList from "./TodayLectureList";
import { LectureIcon } from "@checkin/icon";

const TodayLectures = () => {
  return (
    <Card type="Lecture">
      <CardTitle>
        <LectureIcon />
        오늘의 방과후
      </CardTitle>
      <TodayLaectureList />
    </Card>
  );
};

export default TodayLectures;
