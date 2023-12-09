import withAuth from "@/HOF/withAuthHOF";
import Mypage from "@/components/Mypage";
import LectureRepositoryImpl from "@/repositories/LectureRepository/LectureRepositoryImpl";
import MemberRepositoryImpl from "@/repositories/MemberRepository/MemberRepositoryImpl";
import { CheckInQueryKey } from "@checkin/querykey";
import React from "react";
import { QueryClient, dehydrate } from "react-query";

const myinfo = () => {
  return <Mypage />;
};

export default myinfo;
