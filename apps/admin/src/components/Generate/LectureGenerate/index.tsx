import React from "react";
import * as S from "./style";
import { Flex } from "@checkin/ui";
import { useCreateLecture } from "@/hooks/Lecture/useCreateLecture";

import LectureNameAndExplantion from "./LectureNameAndExplanation";
import LectureSelect from "./LectureSelect";
import LectureTime from "./LectureTime";
import LectureAcceptableStudent from "./LectureAcceptableStudent";
import LecturePeriod from "./LecturePeriod";
import LectureSubmitButton from "./LectureSubmitButton";

const GenerateForm = () => {
  const {
    onSubmitLectureData,
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
  } = useCreateLecture();
  return (
    <>
      <S.LectureFormContainer onSubmit={onSubmitLectureData}>
        <LectureNameAndExplantion
          lectureNameExplan={lectureNameExplan}
          onChangeLectureText={onChangeLectureNameExplan}
        />
        <LectureSelect
          lectureSelectState={lectureSelectState}
          onChangeLectureSelectState={onChangeLectureSelectState}
        />
        <LectureTime
          onChangeLectureDayOfWeek={onChangeLectureDayOfWeek}
          lectureTime={lectureTime}
          lectureDayOfWeek={lectureDayOfWeek}
          onChangeLectureTime={onChangeLectureTime}
        />
        <Flex gap={80}>
          <LectureAcceptableStudent
            acceptableStudent={acceptableStudent}
            onChangeAcceptableStudent={onChangeAcceptableStudent}
          />
          <LecturePeriod
            lecturePeriod={lecturePeriod}
            onChangeLecturePeriod={onChangeLecturePeriod}
          />
        </Flex>
        <LectureSubmitButton />
      </S.LectureFormContainer>
    </>
  );
};

export default GenerateForm;
