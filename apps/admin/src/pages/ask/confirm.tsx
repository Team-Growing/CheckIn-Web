import withAuth from "@/HOF/withAuthHOF";
import Confirm from "@/components/Confirm";
import QuestionRepositoryImpl from "@/repositories/QuestionRepository/QuestionRepositoryImpl";
import SuggestionRepositoryImpl from "@/repositories/SuggestionRepository/SuggestionRepositoryImpl";
import { CheckInQueryKey } from "@checkin/querykey";
import { GetServerSidePropsContext } from "next";
import React from "react";
import { QueryClient, dehydrate } from "react-query";

const ConfirmPage = () => {
  return <Confirm />;
};

export const getServerSideProps = withAuth(
  async ({ query }: GetServerSidePropsContext) => {
    const page = Number(query.page) || 1; // 기본값 1을 설정

    const queryClient = new QueryClient();

    await Promise.all([
      queryClient.prefetchQuery({
        queryKey: CheckInQueryKey.question.getQuestions,
        queryFn: () =>
          QuestionRepositoryImpl.getQuestions({
            page: page,
            limit: 10,
          }),
      }),
      queryClient.prefetchQuery({
        queryKey: ["suggestion/getSuggestions", page],
        queryFn: () =>
          SuggestionRepositoryImpl.getSuggestions({
            page: page,
            limit: 10,
          }),
      }),
    ]);

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  }
);
export default ConfirmPage;
