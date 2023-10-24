import withAuth from "@/HOF/withAuthHOF";
import Mypage from "@/components/Mypage";
import MemberRepositoryImpl from "@/repositories/MemberRepository/MemberRepositoryImpl";
import { CheckInQueryKey } from "@checkin/querykey";
import React from "react";
import { QueryClient, dehydrate } from "react-query";

const myinfo = () => {
  return <Mypage />;
};

export const getServerSideProps = withAuth(async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: CheckInQueryKey.member.getMyLectures,
    queryFn: MemberRepositoryImpl.getMemberLectures,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
});

export default myinfo;
