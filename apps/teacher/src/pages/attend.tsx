import Attend from "@/components/common/Attend";
import Sidebar from "../components/common/Sidebar";

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
      <Sidebar></Sidebar>
      <Attend></Attend>
    </>
  );
}
