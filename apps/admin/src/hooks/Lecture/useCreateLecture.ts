import { useCreateLectureMutation } from "@/queries/Lecture/query";
import { ChangeEvent, FormEvent, useState } from "react";

export const useCreateLecture = () => {
  const createLectureMutation = useCreateLectureMutation();

  const [lectureNameExplan, setLectureNameExplan] = useState({
    lectureName: "",
    explanation: "",
  });

  const [lectureSelectState, setLectureSelectState] = useState({
    placeType: "",
    lectureTag: "SPORTS",
    teacherId: "",
    targetGrade: "",
  });

  const [lectureTime, setLectureTime] = useState({
    dayOfWeek: "",
    startTime: "",
    endTime: "",
  });

  const [acceptableStudent, setAcceptableStudent] = useState({
    maxStudent: "",
    minStudent: "",
  });

  const [lecturePeriod, setLecturePeriod] = useState({
    startDay: "",
    endDay: "",
  });

  const onChangeLectureNameExplan = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setLectureNameExplan((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeLectureSelectState = (name: string, value: string) => {
    setLectureSelectState((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeLectureTime = () => {};

  const onChangeAcceptableStudent = (name: string, value: string) => {
    setAcceptableStudent((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeLecturePeriod = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLecturePeriod((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitLectureData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { lectureName, explanation } = lectureNameExplan;
    const { lectureTag, placeType, targetGrade, teacherId } =
      lectureSelectState;
    const { startTime, endTime, dayOfWeek } = lectureTime;
    const { maxStudent, minStudent } = acceptableStudent;
    const { startDay, endDay } = lecturePeriod;

    createLectureMutation.mutate(
      {
        acceptableStudent: {
          maxStudent: maxStudent,
          minStudent: minStudent,
          targetGrade: targetGrade,
        },
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
    lectureNameExplan,
    lectureSelectState,
    lectureTime,
    acceptableStudent,
    lecturePeriod,
    onChangeLectureNameExplan,
    onChangeLectureSelectState,
    onChangeLectureTime,
    onChangeAcceptableStudent,
    onChangeLecturePeriod,
    onSubmitLectureData,
  };
};
