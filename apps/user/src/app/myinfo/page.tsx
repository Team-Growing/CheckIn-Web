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
