import { useCreateLectureMutation } from "@/queries/Lectures/query";
import { useGetTeachesrQuery } from "@/queries/Member/query";
import { CheckinToast } from "@checkin/toast";
import { dataTransform } from "@checkin/util";
import { ChangeEvent, FormEvent, useState } from "react";
import { useQueryClient } from "react-query";

export const useCreateLecture = () => {
  const createLectureMutation = useCreateLectureMutation();
  const queryClient = useQueryClient();

  const teachersData = useGetTeachesrQuery().data?.data!;

  const [lectureNameExplan, setLectureNameExplan] = useState({
    lectureName: "",
    explanation: "",
  });

  const [teacherName, setTeacherName] = useState("");

  const [lectureSelectState, setLectureSelectState] = useState({
    placeType: "",
    lectureTag: "",
    teacherId: "",
    targetGrade: "",
  });

  const [lectureDayOfWeek, setLectureDayOfWeek] = useState<string[]>([]);

  const [lectureTime, setLectureTime] = useState({
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
    if (name === "teacherId") {
      setTeacherName(value);
      const teacherId = teachersData.find((lectures) => lectures.name === value)
        ?.id!;
      setLectureSelectState((prev) => ({ ...prev, [name]: teacherId }));
    } else setLectureSelectState((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeLectureDayOfWeek = (value: string) => {
    if (lectureDayOfWeek.includes(value)) {
      setLectureDayOfWeek(lectureDayOfWeek.filter((item) => item !== value));
    } else {
      setLectureDayOfWeek((prev) => [...prev, value]);
    }
  };

  const onChangeAcceptableStudent = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setAcceptableStudent((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeLecturePeriod = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLecturePeriod((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeLectureTime = (name: string) => {
    if (name == "sevenAndEight") {
      setLectureTime((prev) => ({
        ...prev,
        startTime: "16:30:00",
        endTime: "18:20:00",
      }));
    } else {
      setLectureTime((prev) => ({
        ...prev,
        startTime: "19:10:00",
        endTime: "21:00:00",
      }));
    }
  };

  const onSubmitLectureData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { lectureName, explanation } = lectureNameExplan;
    const { lectureTag, placeType, targetGrade, teacherId } =
      lectureSelectState;
    const { startTime, endTime } = lectureTime;
    const { maxStudent, minStudent } = acceptableStudent;
    const { startDay, endDay } = lecturePeriod;

    createLectureMutation.mutate(
      {
        acceptableStudent: {
          maxStudent: Number(maxStudent),
          minStudent: Number(minStudent),
          targetGrade: Number(targetGrade),
        },
        lectureTag: lectureTag,
        teacherId: teacherId,
        explanation: explanation,
        lectureName: lectureName,
        lectureSchedule: {
          dayOfWeek: lectureDayOfWeek,
          endDay: endDay,
          endTime: endTime,
          startDay: startDay,
          startTime: startTime,
        },
        placeType: dataTransform.submitPlaceType(placeType)!,
      },
      {
        onSuccess: () => {
          CheckinToast.showSuccess("강좌 생성 성공");
          queryClient.invalidateQueries("lectures/getLectures");
          setLectureNameExplan({ explanation: "", lectureName: "" });
          setLectureSelectState({
            lectureTag: "",
            placeType: "",
            targetGrade: "",
            teacherId: "",
          });
          setLectureDayOfWeek([]);
          setLectureTime({ startTime: "", endTime: "" });
          setAcceptableStudent({ maxStudent: "", minStudent: "" });
          setLecturePeriod({ startDay: "", endDay: "" });
        },
      }
    );
  };

  return {
    teacherName,
    teachersData,
    lectureNameExplan,
    lectureSelectState,
    lectureTime,
    acceptableStudent,
    lecturePeriod,
    lectureDayOfWeek,
    onChangeLectureDayOfWeek,
    onChangeLectureNameExplan,
    onChangeLectureSelectState,
    onChangeLectureTime,
    onChangeAcceptableStudent,
    onChangeLecturePeriod,
    onSubmitLectureData,
  };
};
