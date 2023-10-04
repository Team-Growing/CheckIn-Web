import { DateInput, Flex, InputInfo, InputIntroText } from "@checkin/ui";
import React from "react";

interface Props {
  lecturePeriod: {
    startDay: string;
    endDay: string;
  };
  onChangeLecturePeriod: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LecturePeriod = ({ lecturePeriod, onChangeLecturePeriod }: Props) => {
  return (
    <Flex gap={40}>
      <Flex direction="column" gap={14}>
        <InputInfo>
          시작 일자 <span>*</span>
        </InputInfo>
        <DateInput
          value={lecturePeriod.startDay}
          onChange={onChangeLecturePeriod}
          name="startDay"
        />
        <InputIntroText>시작 일자를 선택해주세요</InputIntroText>
      </Flex>
      <Flex direction="column" gap={14}>
        <InputInfo>
          종료 일자 <span>*</span>
        </InputInfo>
        <DateInput
          value={lecturePeriod.endDay}
          onChange={onChangeLecturePeriod}
          name="endDay"
        />
        <InputIntroText>종료 일자를 선택해주세요</InputIntroText>
      </Flex>
    </Flex>
  );
};

export default LecturePeriod;
