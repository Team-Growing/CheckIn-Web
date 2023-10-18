import Confirm from "@/components/Confirm";
import QuestionRepositoryImpl from "@/repositories/QuestionRepository/QuestionRepositoryImpl";
import SuggestionRepositoryImpl from "@/repositories/SuggestionRepository/SuggestionRepositoryImpl";
import { GetServerSidePropsContext } from "next";
import React from "react";
import { QueryClient, dehydrate } from "react-query";

const ConfirmPage = () => {
  return <Confirm />;
};

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const queryClient = new QueryClient();
  console.log("하이");

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["question/getQuestions", Number(query.page)],
      queryFn: () =>
        QuestionRepositoryImpl.getQuestions({
          page: 1,
          limit: 10,
        }),
    }),
    queryClient.prefetchQuery({
      queryKey: ["suggestion/getSuggestions", Number(query.page)],
      queryFn: () =>
        SuggestionRepositoryImpl.getSuggestions({
          page: 1,
          limit: 10,
        }),
    }),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default ConfirmPage;
