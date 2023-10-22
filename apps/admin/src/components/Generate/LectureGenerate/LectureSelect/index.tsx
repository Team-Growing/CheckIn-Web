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
          items={["1학년", "2학년"]}
          name="targetGrade"
          onChange={onChangeLectureSelectState}
          value={
            lectureSelectState.targetGrade == ""
              ? "2학년"
              : lectureSelectState.targetGrade
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
            ? "류현진"
            : lectureSelectState.teacherId
        }
        name="teacherId"
        intro="수업을 진행하는 강사를 선택해주세요"
      />
      <SelectWrap
        require={true}
        info="수업 장소"
        customStyle={{ width: "25%" }}
        items={["PLAYGROUND", "GYM", "BASKETBALL_COURT", "TENNIS_COURT"]}
        onChange={onChangeLectureSelectState}
        value={
          lectureSelectState.placeType == ""
            ? "ex ) 운동장"
            : lectureSelectState.placeType
        }
        name="placeType"
        intro="수업을 진행하는 강사를 선택해주세요"
      />
    </>
  );
};

export default LectureSelect;
