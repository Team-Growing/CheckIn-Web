import React from "react";
import CMS from "@/components/CMS";
import { QueryClient, dehydrate } from "react-query";
import LectureRepositoryImpl from "@/repositories/LectureRepository/LectureRepositoryImpl";
import { GetServerSidePropsContext } from "next";
import { isServer } from "@/util/ssr";

const checkAttendancePage = () => {
  return <CMS />;
};

// export const getServerSideProps = async ({
//   query,
// }: GetServerSidePropsContext) => {
//   const queryClient = new QueryClient();

//   if (isServer()) {
//     await Promise.all([
//       queryClient.prefetchQuery(
//         ["lectures/getLectures", query.statu as string, Number(query.grade)],
//         () =>
//           LectureRepositoryImpl.getLecturesByLectureStatus({
//             status: query.status as string,
//             grade: Number(query.grade),
//           }),
//         {
//           cacheTime: 1000 * 60,
//         }
//       ),
//     ]);
//   }

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// };

export default checkAttendancePage;
