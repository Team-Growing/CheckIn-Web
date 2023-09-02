import React, { useEffect } from "react";
import { SectionHeader } from "@checkin/ui";
import * as S from "./style";

const Mypage = () => {
  return (
    <S.MypageContainer>
      <SectionHeader title="마이페이지" subTitle="My page & Setting" />
    </S.MypageContainer>
  );
};

export default Mypage;
