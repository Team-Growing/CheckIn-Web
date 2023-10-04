import React from "react";
import * as S from "./style";
import { Flex, LectureBox, LectureTagBox, SectionHeader } from "@checkin/ui";
import { CmsStatusList } from "./constant";

const CMS = () => {
  return (
    <S.CMSContainer>
      <S.CMSTopWrap>
        <SectionHeader title="방과후 관리" subTitle="Lecture Manage" />
      </S.CMSTopWrap>
      <S.CMSListContainer>
        {CmsStatusList.map((item, key) => (
          <Flex
            gap={20}
            direction="column"
            align="center"
            customStyle={{ marginTop: "20px" }}
          >
            <S.CmsStatusBox key={key}>
              <S.CmsStatusColorBox status={item.color}></S.CmsStatusColorBox>
              <p>{item.name}</p>
            </S.CmsStatusBox>
            {Array.from({ length: 5 }).map(() => (
              <LectureTagBox
                type="Enrol"
                grade="2"
                lectureTag="SPORTS"
                people="10명"
                place="PLAYGROUND"
                teacher="원태인"
                title="야구교실"
              />
            ))}
          </Flex>
        ))}
      </S.CMSListContainer>
    </S.CMSContainer>
  );
};

export default CMS;
