import withAuth from "@/HOF/withAuth";
import Attend from "@/components/Attend";
import AttendanceRepositoryImpl from "@/repositories/AttendanceRepository/AttendanceRepositoryImpl";
import LectureRepositoryImpl from "@/repositories/LectureRepository/LectureRepositoryImpl";
import { CheckInQueryKey } from "@checkin/querykey";
import { GetServerSidePropsContext } from "next";
import { QueryClient, dehydrate } from "react-query";

export default function Home() {
  return <Attend />;
}

export const getServerSideProps = withAuth(
  async ({ query }: GetServerSidePropsContext) => {
    const queryClient = new QueryClient();

    await Promise.all([
      queryClient.prefetchQuery({
        queryKey: CheckInQueryKey.lecture.getTodayMyLectures,
        queryFn: LectureRepositoryImpl.getTodayMyLectures,
      }),
      queryClient.prefetchQuery({
        queryKey: CheckInQueryKey.attendance.getAttendacneList(
          Number(query.id)
        ),
        queryFn: () => AttendanceRepositoryImpl.getAttendants(Number(query.id)),
      }),
    ]);

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  }
);
