import React from "react";
import * as S from "./style";
import { Button, ButtonWrapper, Flex, SectionHeader } from "@checkin/ui";
import { CmsStatusList } from "./constant";
import LecturesList from "./CMSList";
import useManageLecture from "@/hooks/Lecture/useManageLecture";
import { useRouter } from "next/router";

const CMS = () => {
  const { query } = useRouter();
  const router = useRouter();

  const {
    lectureIdList,
    onChangeLectureIdList,
    onChangeLectureStatus,
    onPatchLectureStatus,
  } = useManageLecture(Number(query.grade));

  return (
    <S.CMSContainer>
      <S.CMSTopWrap>
        <SectionHeader title="방과후 관리" subTitle="Lecture Manage" />
      </S.CMSTopWrap>
      <Flex customStyle={{ width: "100%", paddingLeft: "104px" }}>
        <ButtonWrapper>
          <Button
            customStyle={{ width: "138px" }}
            type="primary"
            isSelect={Number(query.grade) === 1 ? false : true}
            onClick={() => {
              router.replace("/cms/1");
            }}
          >
            1학년
          </Button>
          <Button
            customStyle={{ width: "138px" }}
            type="primary"
            isSelect={Number(query.grade) === 2 ? false : true}
            onClick={() => {
              router.replace("/cms/2");
            }}
          >
            2학년
          </Button>
        </ButtonWrapper>
      </Flex>
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
              grade={Number(query.grade)}
            />
          </Flex>
        ))}
      </S.CMSListContainer>
    </S.CMSContainer>
  );
};

export default CMS;
