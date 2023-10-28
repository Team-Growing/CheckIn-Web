import React from "react";
import * as S from "./style";
import { CheckLogo } from "@checkin/icon";
import { dataTransform, dateTransform, stopBubbling } from "@checkin/util";
import { useGetSuggestionQuery } from "@/queries/Suggestion/query";
import { Button, Flex } from "@checkin/ui";

interface Props {
  id: number;
  close: () => void;
}

const SuggestionConfirmDetail = ({ id, close }: Props) => {
  const data = useGetSuggestionQuery(id).data?.data;

  return (
    <S.Container onClick={stopBubbling}>
      <S.HeaderWrap>
        <CheckLogo height="52" width="52" />
        <S.HeaderTitle>수업 제안 확인</S.HeaderTitle>
      </S.HeaderWrap>
      <S.Wrap>
        <S.TopWrap>
          <S.Title>{data?.name}</S.Title>
          <S.DayOfWeek>
            {dataTransform.TransformDayOfWeek(data?.dayOfWeek!)}
          </S.DayOfWeek>
        </S.TopWrap>
        <S.InfoBox>
          <S.InfoText>{`작성자 : ${data?.suggester.name}`}</S.InfoText>
          <S.InfoText>{`일자 : ${dateTransform.hyphen(
            data?.createdAt
          )}`}</S.InfoText>
        </S.InfoBox>
        <Flex
          direction="column"
          customStyle={{ width: "100%", marginTop: "27px" }}
          gap={22}
        >
          <Flex direction="column" customStyle={{ width: "100%" }} gap={10}>
            <S.ContentSection>수업 내용</S.ContentSection>
            <S.ContentBox>{data?.content}</S.ContentBox>
          </Flex>
          <Flex direction="column" customStyle={{ width: "100%" }} gap={10}>
            <S.ContentSection>바라는 점</S.ContentSection>
            <S.ContentBox>{data?.additional}</S.ContentBox>
          </Flex>
        </Flex>
        <Flex justify="end" customStyle={{ marginTop: "30px" }}>
          <Button type="primary" onClick={close}>
            확인하기
          </Button>
        </Flex>
      </S.Wrap>
    </S.Container>
  );
};

export default SuggestionConfirmDetail;
