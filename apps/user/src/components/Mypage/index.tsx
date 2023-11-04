import React from "react";
import { SectionHeader } from "@checkin/ui";
import * as S from "./style";
import MypageForm from "./MypageForm";
import MyCancelLectures from "./MyCancelLecture";
import MyLectures from "./MyLectures";
import { useGetMemberInfo } from "@/queries/Member/Member.query";
import { useGetMyLectures } from "@/queries/Lectures/query";
const Mypage = () => {
  const { data: serverMemberLecturesData } = useGetMyLectures();
  const { data: serverMyInfo } = useGetMemberInfo();
  const { name } = serverMyInfo?.data!;
  const { grade, number, room } = serverMyInfo?.data.studentInfo!;
  return (
    <S.MypageContainer>
      <SectionHeader title="마이페이지" subTitle="My page & Setting" />
      <MypageForm serverMyInfo={serverMyInfo!} />
      <S.MypageSectionTitle
        style={{ marginTop: "37px" }}
      >{`${serverMyInfo?.data.name}님의 방과후`}</S.MypageSectionTitle>
      {serverMemberLecturesData?.data ? (
        <MyLectures serverMemberLecturesData={serverMemberLecturesData} />
      ) : (
        <>Server Error...</>
      )}
      <S.MypageSectionTitle style={{ marginTop: "22px" }}>
        {`${serverMyInfo?.data.name}님의 결강신청`}
      </S.MypageSectionTitle>
      <MyCancelLectures grade={grade} number={number} room={room} name={name} />
    </S.MypageContainer>
  );
};

export default Mypage;
