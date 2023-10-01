import withAuth from "@/components/HOC/withAuth";
import Home from "@/components/Home";
import Head from "next/head";

export default function HomePage() {
  const AuthHomePage = withAuth(Home);
  return (
    <>
      <Head>
        <title>홈 | check-in</title>
      </Head>
      <AuthHomePage />
    </>
  );
}
