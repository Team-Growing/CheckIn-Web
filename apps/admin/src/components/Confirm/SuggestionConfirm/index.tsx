import React from "react";
import { ConfirmLengthText } from "../style";
import * as S from "./style";
import { dateTransform, stringEllipsis } from "@checkin/util";
import { useGetSuggestionsQuery } from "@/queries/Suggestion/query";

const SuggestionConfirm = () => {
  const { data: serverSuggestionsData } = useGetSuggestionsQuery({
    limit: 10,
    page: 1,
  });

  console.log(serverSuggestionsData);

  return (
    <>
      <ConfirmLengthText>
        총 <span>{serverSuggestionsData?.data.totalCount}개의</span>의 수업제안
        있습니다.
      </ConfirmLengthText>
      <S.ConfirmListContainer>
        <S.ConfirmListHeader>
          <S.ConfirmTitle style={{ width: "10%" }}>제안 번호</S.ConfirmTitle>
          <S.ConfirmTitle style={{ width: "10%" }}>제안 학생</S.ConfirmTitle>
          <S.ConfirmTitle style={{ width: "60%" }}>수업 이름</S.ConfirmTitle>
          <S.ConfirmTitle style={{ width: "20%" }}>일자</S.ConfirmTitle>
        </S.ConfirmListHeader>
        {serverSuggestionsData?.data.value.map((data) => (
          <S.ConfirmListItemContaienr key={Number(data.suggestionId)}>
            <S.ConfirmListItem style={{ width: "10%" }}>
              {data.suggestionId.value}
            </S.ConfirmListItem>
            <S.ConfirmListItem style={{ width: "10%" }}>
              {data.suggester.name}
            </S.ConfirmListItem>
            <S.ConfirmListItem style={{ width: "60%" }}>
              {stringEllipsis(data.name, 45)}
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

export default SuggestionConfirm;
