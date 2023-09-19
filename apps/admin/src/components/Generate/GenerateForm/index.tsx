import React from "react";
import * as S from "./style";
import {
  Button,
  Flex,
  Input,
  InputInfo,
  InputIntroText,
  InputWrap,
  Select,
  Textarea,
} from "@checkin/ui";
import { DAYOFWEEKITEMS, LECTURE_TIMES } from "@/constant/DayOfWeek/constant";
import { InputInfoText } from "@checkin/ui/components/UI/Input/style";
import { useCreateLecture } from "@/hooks/Lecture/useCreateLecture";
import NameAndExplanation from "./NameAndExplanation";
import GenerateButton from "./GenerateButton";

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
      <S.SuggestionFormContainer onSubmit={onSubmitLectureData}>
        <NameAndExplanation
          lectureText={lectureText}
          onChangeLectureText={onChangeLectureText}
        />
        <Flex gap={50}>
          <InputWrap>
            <InputInfo>
              수업 대상 <span>*</span>
            </InputInfo>
            <Select
              items={["ex", "1학년", "2학년"]}
              onChange={onChangeAcceptableStudent}
              value={
                acceptableStudent.targetGrade == ""
                  ? "ex"
                  : acceptableStudent.targetGrade
              }
              customStyle={{ width: "161px" }}
              name="targetGrade"
            />
            <InputIntroText>수업 대상을 선택해주세요</InputIntroText>
          </InputWrap>
          <InputWrap>
            <InputInfo>
              수업 카테고리 <span>*</span>
            </InputInfo>
            <Select
              items={["SPORTS", "INSTRUMENT", "AUTONOMY", "NARSHA"]}
              onChange={onChangeLectureInfo}
              value={
                lectureInfo.lectureTag == "SPORTS"
                  ? "SPORTS"
                  : lectureInfo.lectureTag
              }
              customStyle={{ width: "181px" }}
              name="lectureTag"
            />
            <InputIntroText>수업 카테고리를 선택해주세요</InputIntroText>
          </InputWrap>
        </Flex>
        <InputWrap>
          <InputInfo>
            방과후 강사 <span>*</span>
          </InputInfo>
          <Select
            items={["류현진", "원태인"]}
            onChange={onChangeLectureInfo}
            value={
              lectureInfo.teacherId == "" ? "백승하" : lectureInfo.teacherId
            }
            customStyle={{ width: "181px" }}
            name="teacherId"
          />
          <InputIntroText>수업을 진행하는 강사를 선택해주세요</InputIntroText>
        </InputWrap>
        <InputWrap>
          <InputInfo>
            수업 장소 <span>*</span>
          </InputInfo>
          <Select
            items={["강당", "등등"]}
            onChange={onChangeLectureInfo}
            value={
              lectureInfo.placeType == "" ? "ex) 강당" : lectureInfo.placeType
            }
            customStyle={{ width: "181px" }}
            name="placeType"
          />
          <InputIntroText>수업을 원하는 요일을 선택해주세요</InputIntroText>
        </InputWrap>

        <Flex gap={50}>
          <InputWrap>
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
          </InputWrap>
          <InputWrap>
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
          </InputWrap>
        </Flex>
        <Flex gap={115}>
          <Flex gap={40}>
            <InputWrap>
              <InputInfoText>
                최소인원 <span>*</span>
              </InputInfoText>
              <Select
                items={["1", "2"]}
                onChange={onChangeAcceptableStudent}
                value={
                  acceptableStudent.minStudent == ""
                    ? "ex 0명"
                    : acceptableStudent.minStudent
                }
                customStyle={{ width: "161px" }}
                name="minStudent"
              />
              <InputIntroText>최소인원을 선택해주세요</InputIntroText>
            </InputWrap>
            <InputWrap>
              <InputInfoText>
                최대 인원 <span>*</span>
              </InputInfoText>
              <Select
                items={["20", "19"]}
                onChange={onChangeAcceptableStudent}
                value={
                  acceptableStudent.maxStudent == ""
                    ? "ex 20명"
                    : acceptableStudent.maxStudent
                }
                customStyle={{ width: "161px" }}
                name="maxStudent"
              />
              <InputIntroText>최소인원을 선택해주세요</InputIntroText>
            </InputWrap>
          </Flex>
          <Flex gap={40}>
            <InputWrap>
              <InputInfoText>
                시작 일자 <span>*</span>
              </InputInfoText>
              <Input type="date" />
              <InputIntroText>시작 일자를 선택해주세요</InputIntroText>
            </InputWrap>
            <InputWrap>
              <InputInfoText>
                종료 일자 <span>*</span>
              </InputInfoText>
              <Input type="date" />
              <InputIntroText>종료 일자를 선택해주세요</InputIntroText>
            </InputWrap>
          </Flex>
        </Flex>
        <GenerateButton />
      </S.SuggestionFormContainer>
    </>
  );
};

export default GenerateForm;
