import React from "react";
import * as S from "./style";
import { Flex, SectionHeader } from "@checkin/ui";
import { CmsStatusList } from "./constant";
import LecturesList from "./CMSList";
import useManageLecture from "@/hooks/Lecture/useManageLecture";

const CMS = () => {
  const {
    lectureIdList,
    onChangeLectureIdList,
    onChangeLectureStatus,
    onPatchLectureStatus,
  } = useManageLecture();
  console.log(lectureIdList);

  return (
    <S.CMSContainer>
      <S.CMSTopWrap>
        <SectionHeader title="방과후 관리" subTitle="Lecture Manage" />
      </S.CMSTopWrap>
      <S.CMSListContainer>
        {CmsStatusList.map((item, key) => (
          <Flex
            key={key}
            gap={20}
            direction="column"
            align="center"
            customStyle={{ marginTop: "20px" }}
          >
            <S.CmsStatusBox
              key={key}
              onClick={() => {
                onPatchLectureStatus(item.status);
              }}
            >
              <S.CmsStatusColorBox status={item.color}></S.CmsStatusColorBox>
              <p>{item.name}</p>
            </S.CmsStatusBox>
            <LecturesList
              status={item.status}
              lectureIdList={lectureIdList}
              onChangeLectureIdList={onChangeLectureIdList}
            />
          </Flex>
        ))}
      </S.CMSListContainer>
    </S.CMSContainer>
  );
};

export default CMS;
