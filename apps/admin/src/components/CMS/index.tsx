import React, { useState } from "react";
import * as S from "./style";
import { Button, ButtonWrapper, Flex, SectionHeader } from "@checkin/ui";
import { CmsStatusList } from "./constant";
import LecturesList from "./CMSList";
import useManageLecture from "@/hooks/Lecture/useManageLecture";
import { useGetAllLecturesQuery } from "@/queries/Lecture/query";
import { useRouter } from "next/router";

const CMS = () => {
  const { query } = useRouter();
  const [grade, setGrade] = useState(Number(query.grade));
  const router = useRouter();

  const {
    lectureIdList,
    onChangeLectureIdList,
    onChangeLectureStatus,
    onPatchLectureStatus,
  } = useManageLecture();

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
            isSelect={grade === 1 ? false : true}
            onClick={() => {
              setGrade(1);
              router.push("/cms/1");
            }}
          >
            1학년
          </Button>
          <Button
            customStyle={{ width: "138px" }}
            type="primary"
            isSelect={grade === 2 ? false : true}
            onClick={() => {
              setGrade(2);
              router.push("/cms/2");
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
              grade={grade}
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
