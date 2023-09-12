import React, { useEffect } from "react";
import { SectionHeader } from "@checkin/ui";
import * as S from "./style";
import MypageForm from "./MypageForm";
import MyCancelLectures from "./MyCancelLecture";
import MyLectures from "./MyLectures";

const Mypage = () => {
  return (
    <S.MypageContainer>
      <SectionHeader title="마이페이지" subTitle="My page & Setting" />
      <MypageForm />
      <S.MypageSectionTitle style={{ marginTop: "37px" }}>
        백승하 님의 방과후
      </S.MypageSectionTitle>
      <MyLectures />
      <S.MypageSectionTitle style={{ marginTop: "22px" }}>
        백승하 님의 방과후
      </S.MypageSectionTitle>
      <MyCancelLectures />
    </S.MypageContainer>
  );
};

export default Mypage;
