import withAuth from "@/HOF/withAuth";
import Mypage from "../components/Mypage";
import React from "react";
import { QueryClient, dehydrate } from "react-query";
import { CheckInQueryKey } from "@checkin/querykey";
import LectureRepositoryImpl from "@/repositories/LectureRepository/LectureRepositoryImpl";
import MemberRepositoryImpl from "@/repositories/MemberRepository/MemberRepositoryImpl";

const myinfo = () => {
  return <Mypage />;
};

export const getServerSideProps = withAuth(async () => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: CheckInQueryKey.member.getMyLectures,
      queryFn: LectureRepositoryImpl.getMyLectures,
    }),
    queryClient.prefetchQuery({
      queryKey: CheckInQueryKey.member.getMy,
      queryFn: MemberRepositoryImpl.getMemberInfo,
    }),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
});

export default myinfo;
