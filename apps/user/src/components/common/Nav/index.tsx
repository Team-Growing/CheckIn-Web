import * as S from "./style";
import NavItem from "./NavItem/index";
import NavUser from "./NavUser/index";
import { Logo } from "@checkin/icon";
import Link from "next/link";

const Nav = () => {
  return (
    <S.NavContainer>
      <S.NavTopWrap>
        <Link href={"/"}>
          <Logo />
        </Link>
        <NavItem />
      </S.NavTopWrap>
      <NavUser />
    </S.NavContainer>
  );
};

export default Nav;
