import withAuth from "@/HOF/withAuthHOF";
import Register from "@/components/Register";
import LectureRepositoryImpl from "@/repositories/LectureRepository/LectureRepositoryImpl";
import { GetServerSidePropsContext } from "next";
import React from "react";
import { QueryClient, dehydrate } from "react-query";

const RegisterPage = () => {
  return <Register />;
};

export const getServerSideProps = withAuth(
  async ({ query }: GetServerSidePropsContext) => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
      queryKey: ["lectures/getEnrolmentLectures", Number(query.grade)],
      queryFn: () =>
        LectureRepositoryImpl.getEnrolmentLectures(Number(query.grade)),
    });

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  }
);
export default RegisterPage;
