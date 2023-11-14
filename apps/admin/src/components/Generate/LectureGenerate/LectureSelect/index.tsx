import { useGetTeachesrQuery } from "@/queries/Member/query";
import { Flex, SelectWrap } from "@checkin/ui";
import React from "react";

interface Props {
  teacherName: string;
  teachersData: [
    {
      id: string;
      name: string;
    }
  ];
  lectureSelectState: {
    placeType: string;
    lectureTag: string;
    teacherId: string;
    targetGrade: string;
  };
  onChangeLectureSelectState: (name: string, value: string) => void;
}

const LectureSelect = ({
  teachersData,
  lectureSelectState,
  onChangeLectureSelectState,
  teacherName,
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
          value={lectureSelectState.targetGrade}
          placeholder="ex ) 2학년"
          zIndex={1}
          intro="수업 대상을 선택해주세요"
        />
        <SelectWrap
          customStyle={{ width: "100%" }}
          require={true}
          info="수업 카테고리"
          items={["스포츠", "악기", "자율", "나르샤"]}
          name="lectureTag"
          onChange={onChangeLectureSelectState}
          value={lectureSelectState.lectureTag}
          placeholder="ex ) 스포츠"
          zIndex={1}
          intro="수업 카테고리를 선택해주세요"
        />
      </Flex>
      <SelectWrap
        require={true}
        info="방과후 강사"
        customStyle={{ width: "25%" }}
        items={teachersData?.map((data) => data.name)}
        onChange={onChangeLectureSelectState}
        value={teacherName}
        placeholder="ex ) 백승하(야구)"
        zIndex={3}
        name="teacherId"
        intro="수업을 진행하는 강사를 선택해주세요"
      />
      <SelectWrap
        require={true}
        info="수업 장소"
        customStyle={{ width: "25%" }}
        items={["운동장", "강당", "농구장", "테니스장"]}
        onChange={onChangeLectureSelectState}
        value={lectureSelectState.placeType}
        placeholder="ex ) 운동장"
        name="placeType"
        intro="수업을 진행하는 강사를 선택해주세요"
      />
    </>
  );
};

export default LectureSelect;
