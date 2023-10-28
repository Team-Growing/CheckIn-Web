import React, { useState } from "react";
import { ConfirmLengthText } from "../style";
import * as S from "./style";
import { dateTransform, stringEllipsis, useBooleanState } from "@checkin/util";
import { useGetSuggestionsQuery } from "@/queries/Suggestion/query";
import Pagination from "react-js-pagination";
import { useRouter } from "next/router";
import { Modal } from "@checkin/ui";
import SuggestionConfirmDetail from "../Detail/Suggestion";

const SuggestionConfirm = () => {
  const [page, setPage] = useState(1);
  const [id, setId] = useState(0);

  const { data: serverSuggestionsData } = useGetSuggestionsQuery({
    limit: 10,
    page: page,
  });

  const onChange = (page: number) => {
    setPage(page);
  };

  const {
    value: isOpened,
    setFalse: close,
    setTrue: open,
  } = useBooleanState(false);

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
          <S.ConfirmListItemContaienr
            key={Number(data.suggestionId.value)}
            onClick={() => {
              setId(data.suggestionId.value);
              open();
            }}
          >
            <S.ConfirmListItem style={{ width: "10%", paddingLeft: "1%" }}>
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
      <Pagination
        activePage={page}
        onChange={onChange}
        totalItemsCount={serverSuggestionsData?.data.totalCount!}
        itemsCountPerPage={10}
      />
      <Modal isOpened={isOpened} onClose={close}>
        <SuggestionConfirmDetail id={id} close={close} />
      </Modal>
    </>
  );
};

export default SuggestionConfirm;
