import { useGetQuestionQuery } from "@/queries/Question/query";
import React from "react";
import * as S from "./style";
import { CheckLogo } from "@checkin/icon";
import { dateTransform, stopBubbling } from "@checkin/util";
import { Button, Flex } from "@checkin/ui";

interface Props {
  id: number;
}

const QuestionConfirmDetail = ({ id }: Props) => {
  const data = useGetQuestionQuery(id).data?.data;
  return (
    <S.Container onClick={stopBubbling}>
      <S.HeaderWrap>
        <CheckLogo height="52" width="52" />
        <S.HeaderTitle>문의사항 확인</S.HeaderTitle>
      </S.HeaderWrap>
      <S.Wrap>
        <S.Title>{data?.title}</S.Title>
        <S.InfoBox>
          <S.InfoText>{`작성자 : ${data?.questioner.name}`}</S.InfoText>
          <S.InfoText>{`일자 : ${dateTransform.hyphen(
            data?.createdAt
          )}`}</S.InfoText>
        </S.InfoBox>
        <S.Content>
          어쩌구저쩌구 교재가 필요해요 지금 당장 필요하니까 빨리 구매 안하면
          수업 진행 안합니다^^
        </S.Content>
        <Flex justify="end">
          <Button type="primary">확인하기</Button>
        </Flex>
      </S.Wrap>
    </S.Container>
  );
};

export default QuestionConfirmDetail;
