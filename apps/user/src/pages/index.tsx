import withAuth from "@/HOF/withAuthHOF";
import Home from "@/components/Home";
import LectureRepositoryImpl from "@/repositories/LectureRepository/LectureRepositoryImpl";
import NoticeRepositoryImpl from "@/repositories/NoticeRepository/NoticeRepositoryImpl";
import { CheckInQueryKey } from "@checkin/querykey";
import Head from "next/head";
import { QueryClient, dehydrate } from "react-query";

function HomePage() {
  return (
    <>
      <Head>
        <title>홈 | check-in</title>
      </Head>
      <Home />
    </>
  );
}

export const getServerSideProps = withAuth(async () => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: CheckInQueryKey.lecture.getToday,
      queryFn: LectureRepositoryImpl.getTodayLecture,
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
    }),

    queryClient.prefetchQuery({
      queryKey: CheckInQueryKey.notice.getActive,
      queryFn: NoticeRepositoryImpl.getActiveNotice,
    }),

    queryClient.prefetchQuery({
      queryKey: CheckInQueryKey.member.getMyTodayLectures,
      queryFn: LectureRepositoryImpl.getTodayMyLectures,
    }),
  ]);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
});

export default HomePage;
