import { DAYOFWEEKITEMS, LECTURE_TIMES } from "@/constant/DayOfWeek/constant";
import { Flex, InputInfo, InputIntroText } from "@checkin/ui";
import React from "react";
import * as S from "./style";

interface Props {
  lectureTime: {
    startTime: string;
    endTime: string;
  };
  onChangeLectureTime: (value: string) => void;
  lectureDayOfWeek: string[];
  onChangeLectureDayOfWeek: (value: string) => void;
}

const LectureTime = ({
  onChangeLectureTime,
  onChangeLectureDayOfWeek,
  lectureDayOfWeek,
  lectureTime,
}: Props) => {
  return (
    <Flex gap={50}>
      <Flex direction="column" gap={10}>
        <InputInfo>
          수업 요일 <span>*</span>
        </InputInfo>
        <InputIntroText>수업을 원하는 요일을 선택해주세요</InputIntroText>
        <Flex gap={10}>
          {DAYOFWEEKITEMS.map((item, idx) => (
            <S.SelectDateBox
              isSelect={lectureDayOfWeek.includes(item.value) ? true : false}
              onClick={() => onChangeLectureDayOfWeek(item.value)}
              key={idx}
            >
              {item.name}
            </S.SelectDateBox>
          ))}
        </Flex>
      </Flex>

      <Flex direction="column" gap={10}>
        <InputInfo>
          수업 교시 <span>*</span>
        </InputInfo>
        <InputIntroText>수업을 원하는 교시를 선택해주세요</InputIntroText>
        <Flex gap={10}>
          {LECTURE_TIMES.map((item, idx) => (
            <S.SelectDateBox
              onClick={() => onChangeLectureTime(item.dataName)}
              key={idx}
            >
              {item.name}
            </S.SelectDateBox>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LectureTime;
