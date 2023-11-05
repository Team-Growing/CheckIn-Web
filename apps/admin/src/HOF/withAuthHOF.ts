import { GetServerSideProps, GetServerSidePropsContext } from "next";
import cookies from "next-cookies";
import { ACCESS_TOKEN_KEY } from "@/constant/Token/Token.constant";
import { setAccessToken } from "@/libs/Auth/customAxios";

const withAuth = (getServerSideProps: GetServerSideProps) => {
  return async (context: GetServerSidePropsContext) => {
    const accessToken = cookies(context)[ACCESS_TOKEN_KEY];

    if (accessToken === undefined) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
    setAccessToken(accessToken);

    try {
      return await getServerSideProps(context);
    } catch (error) {}
  };
};

export default withAuth;
