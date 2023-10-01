import React from "react";
import * as S from "./style";
import {
  DateInput,
  Flex,
  InputInfo,
  InputIntroText,
  SelectWrap,
} from "@checkin/ui";
import { DAYOFWEEKITEMS, LECTURE_TIMES } from "@/constant/DayOfWeek/constant";
import { useCreateLecture } from "@/hooks/Lecture/useCreateLecture";
import LectureNameAndExplantion from "./LectureNameAndExplanation";
import LectureSubmitButton from "./LectureSubmitButton";

const GenerateForm = () => {
  const {
    lectureText,
    lectureInfo,
    acceptableStudent,
    dayOfWeek,
    lectureTime,
    lecturePeriod,
    onChangeAcceptableStudent,
    onChangeDayOfWeek,
    onChangeLectureInfo,
    onChangeLecturePeriod,
    onChangeLectureTime,
    onChangeLectureText,
    onSubmitLectureData,
    setDayOfWeek,
  } = useCreateLecture();
  return (
    <>
      <S.LectureFormContainer onSubmit={onSubmitLectureData}>
        <LectureNameAndExplantion
          lectureText={lectureText}
          onChangeLectureText={onChangeLectureText}
        />

        <Flex gap={50}>
          <SelectWrap
            customStyle={{ width: "100%" }}
            require={true}
            info="수업 카테고리"
            items={["SPORTS", "INSTRUMENT", "AUTONOMY", "NARSHA"]}
            name="lectureTag"
            onChange={onChangeLectureInfo}
            value={
              lectureInfo.lectureTag == "SPORTS"
                ? "SPORTS"
                : lectureInfo.lectureTag
            }
            zIndex={1}
          />
        </Flex>

        <SelectWrap
          require={true}
          info="방과후 강사"
          items={["류현진", "원태인"]}
          onChange={onChangeLectureInfo}
          value={lectureInfo.teacherId == "" ? "백승하" : lectureInfo.teacherId}
          name="teacherId"
        />

        <Flex gap={50}>
          <Flex direction="column" gap={10}>
            <InputInfo>
              수업 요일 <span>*</span>
            </InputInfo>
            <InputIntroText>수업을 원하는 요일을 선택해주세요</InputIntroText>
            <Flex gap={10}>
              {DAYOFWEEKITEMS.map((item, idx) => (
                <S.SelectDateBox
                  isSelect={item == dayOfWeek ? true : false}
                  onClick={() => setDayOfWeek(item)}
                  key={idx}
                >
                  {item}
                </S.SelectDateBox>
              ))}
            </Flex>
          </Flex>

          <Flex direction="column" gap={10}>
            <InputInfo>
              수업 교시 <span>*</span>
            </InputInfo>
            <InputIntroText>수업을 원하는 요일을 선택해주세요</InputIntroText>
            <Flex gap={10}>
              {LECTURE_TIMES.map((item, idx) => (
                <S.SelectDateBox
                  isSelect={dayOfWeek == item ? true : false}
                  onClick={() => setDayOfWeek(item)}
                  key={idx}
                >
                  {item}
                </S.SelectDateBox>
              ))}
            </Flex>
          </Flex>
        </Flex>

        <Flex gap={115}>
          <Flex gap={40}>
            <SelectWrap
              info="최소인원"
              items={["1", "2"]}
              onChange={onChangeAcceptableStudent}
              value={
                acceptableStudent.minStudent == ""
                  ? "ex 0명"
                  : acceptableStudent.minStudent
              }
              name="minStudent"
              intro="최소 인원을 선택해주세요"
              require={true}
            />
            <SelectWrap
              info="최대 인원"
              items={["20", "19"]}
              onChange={onChangeAcceptableStudent}
              value={
                acceptableStudent.maxStudent == ""
                  ? "ex 20명"
                  : acceptableStudent.maxStudent
              }
              name="maxStudent"
              intro="최대 인원을 선택해주세요"
              require={true}
            />
          </Flex>

          <Flex gap={40}>
            <Flex direction="column" gap={14}>
              <InputInfo>
                시작 일자 <span>*</span>
              </InputInfo>
              <DateInput />
              <InputIntroText>시작 일자를 선택해주세요</InputIntroText>
            </Flex>
            <Flex direction="column" gap={14}>
              <InputInfo>
                종료 일자 <span>*</span>
              </InputInfo>
              <DateInput />
              <InputIntroText>종료 일자를 선택해주세요</InputIntroText>
            </Flex>
          </Flex>
        </Flex>

        <LectureSubmitButton />
      </S.LectureFormContainer>
    </>
  );
};

export default GenerateForm;
