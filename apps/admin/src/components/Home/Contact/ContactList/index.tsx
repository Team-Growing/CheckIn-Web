import React from "react";
import * as S from "./style";
import { useGetQuestionsQuery } from "@/queries/Question/query";

const ContactList = () => {
  const { data } = useGetQuestionsQuery({ limit: 5, page: 1 });
  return (
    <>
      <S.ContactListContainer>
        <S.ContactListTitle>
          <p>일자</p>
          <p>문의 내용</p>
          <p>이름</p>
        </S.ContactListTitle>
        {data?.data.value.map((data) => (
          <S.ContactListText key={data.questionId.value}>
            <p>{data.createdAt}</p>
            <p>{data.title}</p>
            <p>{data.questioner.name}</p>
          </S.ContactListText>
        ))}
      </S.ContactListContainer>
    </>
  );
};

export default ContactList;
