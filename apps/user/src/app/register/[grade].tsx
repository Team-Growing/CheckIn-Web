import withAuth from "@/HOF/withAuthHOF";
import Register from "@/components/Register";
import LectureRepositoryImpl from "@/repositories/LectureRepository/LectureRepositoryImpl";
import { GetServerSidePropsContext } from "next";
import React from "react";
import { QueryClient, dehydrate } from "react-query";

const RegisterPage = () => {
  return <Register />;
};

export default RegisterPage;
