import React, { useState } from "react";
import * as S from "./style";
import { dateTransform, stringEllipsis } from "@checkin/util";
import { ConfirmLengthText } from "../style";
import { useGetQuestionsQuery } from "@/queries/Question/query";
import { useSetRecoilState } from "recoil";

const QuestionConfirm = () => {
  const [page, setPage] = useState(1);

  const { data: serverQuestionsData } = useGetQuestionsQuery({
    page: page,
    limit: 10,
  });
  console.log(serverQuestionsData);

  return (
    <>
      <ConfirmLengthText>
        총 <span>{serverQuestionsData?.data.totalCount}개의</span>의 문의가
        있습니다.
      </ConfirmLengthText>
      <S.ConfirmListContainer>
        <S.ConfirmListHeader>
          <S.ConfirmTitle style={{ width: "10%" }}>제안 번호</S.ConfirmTitle>
          <S.ConfirmTitle style={{ width: "10%" }}>제안 학생</S.ConfirmTitle>
          <S.ConfirmTitle style={{ width: "60%" }}>제목</S.ConfirmTitle>
          <S.ConfirmTitle style={{ width: "20%" }}>일자</S.ConfirmTitle>
        </S.ConfirmListHeader>
        {serverQuestionsData?.data.value.map(({ data }) => (
          <S.ConfirmListItemContaienr>
            <S.ConfirmListItem style={{ width: "10%" }}>
              {data.questionId.value}
            </S.ConfirmListItem>
            <S.ConfirmListItem style={{ width: "10%" }}>
              {data.questioner.name}
            </S.ConfirmListItem>
            <S.ConfirmListItem style={{ width: "60%" }}>
              {stringEllipsis(data.content, 45)}
            </S.ConfirmListItem>
            <S.ConfirmListItem style={{ width: "20%" }}>
              {dateTransform.hyphen(data.createdAt)}
            </S.ConfirmListItem>
          </S.ConfirmListItemContaienr>
        ))}
      </S.ConfirmListContainer>
    </>
  );
};

export default QuestionConfirm;
