"use client";

import React from "react";
import { SectionHeader } from "@checkin/ui";
import * as S from "./style";
import MypageForm from "./MypageForm";
import MyCancelLectures from "./MyCancelLecture";
import MyLectures from "./MyLectures";
import { useGetMemberInfo } from "@/queries/Member/Member.query";
import { useGetMyLectures } from "@/queries/Lectures/query";
const Mypage = () => {
  return (
    <S.MypageContainer>
      <SectionHeader title="마이페이지" subTitle="My page & Setting" />
    </S.MypageContainer>
  );
};

export default Mypage;
