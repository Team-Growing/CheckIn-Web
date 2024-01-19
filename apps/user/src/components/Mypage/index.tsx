"use client";

import React, { Suspense } from "react";
import { SectionHeader } from "@checkin/ui";
import * as S from "./style";
import MypageForm from "./MypageForm";
import MyCancelLectures from "./MyCancelLecture";
import MyLectures from "./MyLectures";
import { useGetMemberInfo } from "@/queries/Member/Member.query";

const Mypage = () => {
  const { data } = useGetMemberInfo();

  return (
    <S.MypageContainer>
      <SectionHeader title="마이페이지" subTitle="My page & Setting" />
      <Suspense fallback={<span>loading...</span>}>
        <MypageForm />
      </Suspense>
      <S.MypageSectionTitle style={{ marginTop: "37px" }}>{`${
        data?.data.name === undefined ? "홍길동" : data.data.name
      }님의 방과후`}</S.MypageSectionTitle>

      <Suspense fallback={<span>loading...</span>}>
        <MyLectures />
      </Suspense>
      <S.MypageSectionTitle
        style={{ marginTop: "22px" }}
      >{`${data?.data.name}님의 결강신청`}</S.MypageSectionTitle>
      <Suspense fallback={<span>loading...</span>}>
        <MyCancelLectures />
      </Suspense>
    </S.MypageContainer>
  );
};

export default Mypage;
