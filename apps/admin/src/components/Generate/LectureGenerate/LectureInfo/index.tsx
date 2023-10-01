import { InputInfo, InputWrap, Select } from "@checkin/ui";
import React from "react";

const LectureInfo = () => {
  return (
    <>
      {/* <InputWrap>
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
        <InputIntroText>수업을 원하는 요일을 선택해주세요</InputIntroText>
      </InputWrap>

      <InputWrap>
        <InputInfo>
          방과후 강사 <span>*</span>
        </InputInfo>
        <Select
          items={["류현진", "원태인"]}
          onChange={onChangeLectureInfo}
          value={lectureInfo.teacherId == "" ? "백승하" : lectureInfo.teacherId}
          customStyle={{ width: "181px" }}
          name="teacherId"
        />
        <InputIntroText>수업을 원하는 요일을 선택해주세요</InputIntroText>
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
      </InputWrap> */}
    </>
  );
};

export default LectureInfo;
