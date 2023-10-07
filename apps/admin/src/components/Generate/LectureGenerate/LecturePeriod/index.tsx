import { DateInputWrap, Flex } from "@checkin/ui";
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
        <DateInputWrap
          info="시작 일자"
          intro="시작 일자를 선택해주세요"
          value={lecturePeriod.startDay}
          require={true}
          onChange={onChangeLecturePeriod}
          name="startDay"
        />
      </Flex>
      <Flex direction="column" gap={14}>
        <DateInputWrap
          info="종료 일자"
          intro="종료 일자를 선택해주세요"
          value={lecturePeriod.endDay}
          require={true}
          onChange={onChangeLecturePeriod}
          name="endDay"
        />
      </Flex>
    </Flex>
  );
};

export default LecturePeriod;
