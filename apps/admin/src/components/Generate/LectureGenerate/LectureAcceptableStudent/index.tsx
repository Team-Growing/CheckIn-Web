import { Flex, TextInputWrap } from "@checkin/ui";
import React from "react";

interface Props {
  acceptableStudent: {
    maxStudent: string;
    minStudent: string;
  };
  onChangeAcceptableStudent: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LectureAcceptableStudent = ({
  acceptableStudent,
  onChangeAcceptableStudent,
}: Props) => {
  return (
    <Flex gap={40}>
      <TextInputWrap
        info="최소 인원"
        customStyle={{ width: "80%" }}
        placeholder="ex ) 4"
        onChange={onChangeAcceptableStudent}
        value={acceptableStudent.minStudent}
        name="minStudent"
        intro="최소 인원을 선택해주세요"
        require={true}
      />
      <TextInputWrap
        info="최대 인원"
        customStyle={{ width: "80%" }}
        placeholder="ex ) 10"
        onChange={onChangeAcceptableStudent}
        value={acceptableStudent.maxStudent}
        name="maxStudent"
        intro="최대 인원을 선택해주세요"
        require={true}
      />
    </Flex>
  );
};

export default LectureAcceptableStudent;
