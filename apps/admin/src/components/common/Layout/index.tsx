import Token from "@/libs/Token/Token";
import Nav from "../Nav";
import { Container } from "./style";
import { ACCESS_TOKEN_KEY } from "@/constant/Token/Token.constant";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      {Token.getToken(ACCESS_TOKEN_KEY) && <Nav />}
      {children}
    </Container>
  );
};

export default Layout;
