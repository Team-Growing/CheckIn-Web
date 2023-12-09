"use client";

import Nav from "../Nav";
import { Container, Wrap } from "./style";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const pathname = usePathname();
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
