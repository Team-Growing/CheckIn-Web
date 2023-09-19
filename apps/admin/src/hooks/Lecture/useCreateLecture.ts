import { useCreateLectureMutation } from "@/queries/Lecture/Query";
import { Lectures } from "@checkin/types";
import { ChangeEvent, FormEvent, useState } from "react";

export const useCreateLecture = () => {
  const createLectureMutation = useCreateLectureMutation();

  const [lectureText, setLectureText] = useState({
    lectureName: "",
    explanation: "",
  });

  const [lectureInfo, setLectureInfo] = useState({
    placeType: "",
    lectureTag: "SPORTS",
    teacherId: "",
  });
  const [acceptableStudent, setAcceptableStudent] = useState({
    maxStudent: "",
    minStudent: "",
    targetGrade: "",
  });
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [lectureTime, setLectureTime] = useState({
    startTime: "",
    endTime: "",
  });
  const [lecturePeriod, setLecturePeriod] = useState({
    startDay: "",
    endDay: "",
  });

  const onChangeLectureText = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLectureText((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeLectureInfo = (name: string, value: string) => {
    setLectureInfo((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeAcceptableStudent = (name: string, value: string) => {
    setAcceptableStudent((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeDayOfWeek = (value: string) => {
    setDayOfWeek(value);
  };

  const onChangeLectureTime = (name: string, value: string) => {
    setLectureTime((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeLecturePeriod = (name: string, value: string) => {
    setLecturePeriod((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitLectureData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { lectureTag, placeType, teacherId } = lectureInfo;
    const { explanation, lectureName } = lectureText;
    const { startDay, endDay } = lecturePeriod;
    const { startTime, endTime } = lectureTime;
    createLectureMutation.mutate(
      {
        acceptableStudent: acceptableStudent,
        lectureTag: lectureTag,
        teacherId: teacherId,
        explanation: explanation,
        lectureName: lectureName,
        lectureSchedule: {
          dayOfWeek: dayOfWeek,
          endDay: endDay,
          endTime: endTime,
          startDay: startDay,
          startTime: startTime,
        },
        placeType: placeType,
      },
      {
        onSuccess: () => {
          console.log("성공");
        },
      }
    );
  };

  return {
    lectureText,
    lectureInfo,
    acceptableStudent,
    dayOfWeek,
    lectureTime,
    lecturePeriod,
    setDayOfWeek,
    onChangeAcceptableStudent,
    onChangeDayOfWeek,
    onChangeLectureInfo,
    onChangeLecturePeriod,
    onChangeLectureTime,
    onChangeLectureText,
    onSubmitLectureData,
  };
};
