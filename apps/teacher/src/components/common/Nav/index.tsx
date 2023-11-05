import * as S from "./style";
import NavItem from "./NavItem";
import NavUser from "./NavUser";
import { Logo } from "@checkin/icon";
import { useRouter } from "next/router";
import { Flex } from "@checkin/ui";
import Link from "next/link";

const Nav = () => {
  const router = useRouter();
  return (
    <S.NavContainer>
      <S.NavTopWrap>
        <Flex customStyle={{ width: "100%" }} direction="column" align="center">
          <Link href="/">
            <Logo />
          </Link>
          <S.NavLogoText>Teacher</S.NavLogoText>
        </Flex>
        <NavItem />
      </S.NavTopWrap>
      <NavUser />
    </S.NavContainer>
  );
};

export default Nav;
