import { Flex, SelectWrap } from "@checkin/ui";
import React from "react";

interface Props {
  acceptableStudent: {
    maxStudent: string;
    minStudent: string;
  };
  onChangeAcceptableStudent: (name: string, value: string) => void;
}

const LectureAcceptableStudent = ({
  acceptableStudent,
  onChangeAcceptableStudent,
}: Props) => {
  return (
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
  );
};

export default LectureAcceptableStudent;
