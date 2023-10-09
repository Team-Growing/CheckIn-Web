import Register from "@/components/Register";
import LectureRepositoryImpl from "@/repositories/LectureRepository/LectureRepositoryImpl";
import { isServer } from "@/utils/srr";
import { GetServerSidePropsContext } from "next";
import React from "react";
import { QueryClient, dehydrate } from "react-query";

const RegisterPage = () => {
  return <Register />;
};

RegisterPage.getInitialProps = async ({ query }: GetServerSidePropsContext) => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(
      ["lectures/getEnrolmentLectures", query.grade],
      () => LectureRepositoryImpl.getEnrolmentLectures(Number(query.grade))
    ),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default RegisterPage;
