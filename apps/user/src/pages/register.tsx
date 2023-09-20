import Register from "@/components/Register";
import LectureRepositoryImpl from "@/repositories/LectureRepository/LectureRepositoryImpl";
import { isServer } from "@/utils/srr";
import React from "react";
import { QueryClient } from "react-query";

const RegisterPage = () => {
  return <Register />;
};

// RegisterPage.getInitialProps = async () => {
//   const queryClient = new QueryClient();

//   // if (isServer()) {
//   //   await Promise.all([
//   //     queryClient.prefetchQuery(["lecture/EnrolLectures"], () =>
//   //       LectureRepositoryImpl.enrolLecture()
//   //     ),
//   //   ]);
//   // }
// };

export default RegisterPage;
