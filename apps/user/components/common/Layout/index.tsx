import Nav from "../Nav";
import { Container } from "./style";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Nav />
      {children}
    </Container>
  );
};

export default Layout;
