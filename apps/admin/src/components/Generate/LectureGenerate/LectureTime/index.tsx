import { DAYOFWEEKITEMS, LECTURE_TIMES } from "@/constant/DayOfWeek/constant";
import { Flex, InputInfo, InputIntroText } from "@checkin/ui";
import React from "react";
import * as S from "./style";

interface Props {
  lectureTime: {
    dayOfWeek: string;
    startTime: string;
    endTime: string;
  };
  onChangeLectureTime: () => void;
}

const LectureTime = ({ lectureTime, onChangeLectureTime }: Props) => {
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
              isSelect={item == lectureTime.dayOfWeek ? true : false}
              onClick={() => onChangeLectureTime()}
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
              isSelect={item == lectureTime.dayOfWeek ? true : false}
              onClick={() => onChangeLectureTime()}
              key={idx}
            >
              {item}
            </S.SelectDateBox>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LectureTime;
