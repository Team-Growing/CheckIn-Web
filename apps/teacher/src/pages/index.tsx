import withAuth from "@/HOF/withAuth";
import Main from "../components/Home/index";
import { QueryClient, dehydrate } from "react-query";
import { CheckInQueryKey } from "@checkin/querykey";
import LectureRepositoryImpl from "@/repositories/LectureRepository/LectureRepositoryImpl";
import NoticeRepositoryImpl from "@/repositories/NoticeRepository/NoticeRepositoryImpl";

export default function Home() {
  return <Main />;
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
      queryKey: CheckInQueryKey.lecture.getTodayMyLectures,
      queryFn: LectureRepositoryImpl.getTodayMyLectures,
    }),
  ]);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
});
