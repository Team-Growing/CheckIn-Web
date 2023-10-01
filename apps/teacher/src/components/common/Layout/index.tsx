import Nav from "../Sidebar";
import { Container, Wrap } from "./style";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const { pathname } = useRouter();
  return (
    <>
      <Container>
        {pathname !== "/sign" && <Nav />}
        <Wrap>{children}</Wrap>
      </Container>
    </>
  );
};

export default Layout;
