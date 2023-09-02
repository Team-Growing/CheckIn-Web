import Token from "@/libs/Token/Token";
import Nav from "../Nav";
import { Container } from "./style";
import { ACCESS_TOKEN_KEY } from "@/constant/Token/Token.constant";
import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  let loggedin;
  if (typeof window !== undefined) {
    loggedin = Token.getCookie(ACCESS_TOKEN_KEY);
  }

  return (
    <Container>
      {mounted && loggedin && <Nav />}
      {children}
    </Container>
  );
};

export default Layout;
