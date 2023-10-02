import React from "react";
import * as S from "./style";

const ContactList = () => {
  return (
    <>
      <S.ContactListContainer>
        <S.ContactListTitle>
          <p>일자</p>
          <p>문의 내용</p>
          <p>이름</p>
        </S.ContactListTitle>
        {Array.from({ length: 10 }).map(() => (
          <S.ContactListText key={`df`}>
            <p>09/13</p>
            <p>[방과후 교재 지원 문의] 플룻교재 관련건</p>
            <p>백승하</p>
          </S.ContactListText>
        ))}
      </S.ContactListContainer>
    </>
  );
};

export default ContactList;
