import React, { useEffect, useState } from "react";
import * as S from "./style";
import { dateTransform, stringEllipsis, useBooleanState } from "@checkin/util";
import { ConfirmLengthText } from "../style";
import { useGetQuestionsQuery } from "@/queries/Question/query";
import { useSetRecoilState } from "recoil";
import { Modal } from "@checkin/ui";
import QuestionConfirmDetail from "../Detail/Question";
import Pagination from "react-js-pagination";

const QuestionConfirm = () => {
  const [page, setPage] = useState(1);
  const [id, setId] = useState(0);

  const { data: serverQuestionsData } = useGetQuestionsQuery({
    page: page,
    limit: 10,
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
        총 <span>{serverQuestionsData?.data.totalCount}개의</span>의 문의가
        있습니다.
      </ConfirmLengthText>
      <S.ConfirmListContainer>
        <S.ConfirmListHeader>
          <S.ConfirmTitle style={{ width: "10%" }}>제안 번호</S.ConfirmTitle>
          <S.ConfirmTitle style={{ width: "15%" }}>제안 학생</S.ConfirmTitle>
          <S.ConfirmTitle style={{ width: "45%" }}>제목</S.ConfirmTitle>
          <S.ConfirmTitle style={{ width: "20%" }}>일자</S.ConfirmTitle>
          <S.ConfirmTitle style={{ width: "10%" }}>확인 여부</S.ConfirmTitle>
        </S.ConfirmListHeader>
        {serverQuestionsData?.data.value ? (
          serverQuestionsData.data.value.map((data) => (
            <S.ConfirmListItemContaienr
              key={data.questionId.value}
              onClick={() => {
                setId(data.questionId.value);
                open();
              }}
            >
              <S.ConfirmListItem style={{ width: "10%", paddingLeft: "1%" }}>
                {data.questionId.value}
              </S.ConfirmListItem>
              <S.ConfirmListItem style={{ width: "15%" }}>
                {data.questioner.name}
              </S.ConfirmListItem>
              <S.ConfirmListItem style={{ width: "45%" }}>
                {data.title}
              </S.ConfirmListItem>
              <S.ConfirmListItem style={{ width: "20%" }}>
                {dateTransform.hyphen(data.createdAt)}
              </S.ConfirmListItem>
              <S.ConfirmListItem style={{ width: "10%" }}>
                {data.questionStatus === "CONFIRMED" ? "O" : "X"}
              </S.ConfirmListItem>
            </S.ConfirmListItemContaienr>
          ))
        ) : (
          <>server error</>
        )}
      </S.ConfirmListContainer>
      <Pagination
        activePage={page}
        onChange={onChange}
        totalItemsCount={serverQuestionsData?.data.totalCount!}
        itemsCountPerPage={10}
      />
      <Modal isOpened={isOpened} onClose={close}>
        <QuestionConfirmDetail id={id} />
      </Modal>
    </>
  );
};

export default QuestionConfirm;
