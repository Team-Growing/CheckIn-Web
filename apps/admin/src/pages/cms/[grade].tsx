import React from "react";
import CMS from "@/components/CMS";
import { QueryClient, dehydrate } from "react-query";
import LectureRepositoryImpl from "@/repositories/LectureRepository/LectureRepositoryImpl";
import { GetServerSidePropsContext } from "next";
import withAuth from "@/HOF/withAuthHOF";
import { CheckInQueryKey } from "@checkin/querykey";

const checkAttendancePage = () => {
  return <CMS />;
};

export const getServerSideProps = withAuth(
  async ({ query }: GetServerSidePropsContext) => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(
      CheckInQueryKey.lecture.getAll(Number(query.grade)),
      () => LectureRepositoryImpl.getAllLectures(Number(query.grade)),
      {
        cacheTime: 1000 * 60 * 60,
        staleTime: 1000 * 60 * 60,
      }
    );

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  }
);

export default checkAttendancePage;
