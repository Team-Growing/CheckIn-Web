import Nav from "../Nav";
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
        <Wrap isSign={pathname == "/sign" ? false : true}>{children}</Wrap>
      </Container>
    </>
  );
};

export default Layout;
