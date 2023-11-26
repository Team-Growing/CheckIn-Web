import { LectureType } from "@checkin/types";
import { useState } from "react";

const transformLectureIdByName = () => {
  const [lectureName, setLectureName] = useState("");

  const findLectureIdByName = (
    lectures: LectureType[],
    lectureName: string
  ) => {
    setLectureName(lectureName);
    const foundLecture = lectures.find(
      (lecture) => lecture.lectureName === lectureName
    )?.lectureId.value;

    return foundLecture;
  };
  return { lectureName, findLectureIdByName };
};

export default transformLectureIdByName;
