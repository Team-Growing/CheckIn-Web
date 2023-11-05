import * as S from "./style";
import NavItem from "./NavItem/index";
import NavUser from "./NavUser/index";
import { useRouter } from "next/router";
import { Logo } from "@checkin/icon";
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
          <S.NavLogoText>Admin</S.NavLogoText>
        </Flex>
        <NavItem />
      </S.NavTopWrap>
      <NavUser />
    </S.NavContainer>
  );
};

export default Nav;
