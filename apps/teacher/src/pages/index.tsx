import Main from "../components/Home/index";
import Nav from "../components/common/Nav";

export async function getServerSideProps() {
  console.log("test");

  return {
    props: { time: new Date().toISOString() },
  };
}

interface Props {
  time: string;
}

export default function Home({ time }: Props) {
  return (
    <>
      <Main></Main>
    </>
  );
}
