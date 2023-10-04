import { Flex, SelectWrap } from "@checkin/ui";
import React from "react";

interface Props {
  lectureSelectState: {
    placeType: string;
    lectureTag: string;
    teacherId: string;
    targetGrade: string;
  };
  onChangeLectureSelectState: (name: string, value: string) => void;
}

const LectureSelect = ({
  lectureSelectState,
  onChangeLectureSelectState,
}: Props) => {
  return (
    <>
      <Flex gap={50}>
        <SelectWrap
          customStyle={{ width: "100%" }}
          require={true}
          info="수업 대상"
          items={["SPORTS", "INSTRUMENT", "AUTONOMY", "NARSHA"]}
          name="lectureTag"
          onChange={onChangeLectureSelectState}
          value={
            lectureSelectState.lectureTag == "SPORTS"
              ? "2학년"
              : lectureSelectState.lectureTag
          }
          zIndex={1}
          intro="수업 대상을 선택해주세요"
        />
        <SelectWrap
          customStyle={{ width: "100%" }}
          require={true}
          info="수업 카테고리"
          items={["SPORTS", "INSTRUMENT", "AUTONOMY", "NARSHA"]}
          name="lectureTag"
          onChange={onChangeLectureSelectState}
          value={
            lectureSelectState.lectureTag == "SPORTS"
              ? "SPORTS"
              : lectureSelectState.lectureTag
          }
          zIndex={1}
          intro="수업 카테고리를 선택해주세요"
        />
      </Flex>

      <SelectWrap
        require={true}
        info="방과후 강사"
        customStyle={{ width: "25%" }}
        items={["류현진", "원태인"]}
        onChange={onChangeLectureSelectState}
        value={
          lectureSelectState.teacherId == ""
            ? "백승하"
            : lectureSelectState.teacherId
        }
        name="teacherId"
        intro="수업을 진행하는 강사를 선택해주세요"
      />
    </>
  );
};

export default LectureSelect;
