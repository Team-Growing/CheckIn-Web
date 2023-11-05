import withAuth from "@/HOF/withAuthHOF";
import Home from "@/components/Home";
import AbsenceRepositoryImpl from "@/repositories/AbsenceRepository/AbsenceRepositoryImpl";
import LectureRepositoryImpl from "@/repositories/LectureRepository/LectureRepositoryImpl";
import NoticeRepositoryImpl from "@/repositories/NoticeRepository/NoticeRepositoryImpl";
import QuestionRepositoryImpl from "@/repositories/QuestionRepository/QuestionRepositoryImpl";
import { CheckInQueryKey } from "@checkin/querykey";
import { dateTransform } from "@checkin/util";
import { QueryClient, dehydrate } from "react-query";

function HomePage() {
  return <Home />;
}

export const getServerSideProps = withAuth(async () => {
  const queryClient = new QueryClient();
  const date = new Date();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: CheckInQueryKey.lecture.getToday,
      queryFn: LectureRepositoryImpl.getTodayLectures,
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
    }),

    queryClient.prefetchQuery({
      queryKey: CheckInQueryKey.notice.getActive,
      queryFn: NoticeRepositoryImpl.getActiveNotice,
    }),

    queryClient.prefetchQuery({
      queryKey: CheckInQueryKey.question.getQuestions,
      queryFn: () => QuestionRepositoryImpl.getQuestions({ limit: 5, page: 1 }),
    }),

    queryClient.prefetchQuery({
      queryKey: CheckInQueryKey.absence.getAll,
      queryFn: () =>
        AbsenceRepositoryImpl.getAbsences(dateTransform.hyphen(String(date))),
    }),
  ]);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
});

export default HomePage;
