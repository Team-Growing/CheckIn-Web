import React from "react";
import { SectionHeader } from "@checkin/ui";
import * as S from "./style";
import MypageForm from "./MypageForm";
import MyLectures from "./MyLectures";
import { useGetMemberInfo } from "@/queries/Member/query";

const Mypage = () => {
  const { data: myInfoData } = useGetMemberInfo!();

  return (
    <S.MypageContainer>
      <SectionHeader title="마이페이지" subTitle="My page & Setting" />
      <MypageForm myInfoData={myInfoData!} />
      <S.MypageSectionTitle style={{ marginTop: "37px" }}>
        운영중인 강좌
      </S.MypageSectionTitle>
      <MyLectures />
    </S.MypageContainer>
  );
};

export default Mypage;
