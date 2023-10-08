import React from "react";
import * as S from "./style";
import { Flex, SectionHeader } from "@checkin/ui";
import { CmsStatusList } from "./constant";
import LecturesList from "./CMSList";

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
            <LecturesList status={item.status} />
          </Flex>
        ))}
      </S.CMSListContainer>
    </S.CMSContainer>
  );
};

export default CMS;
