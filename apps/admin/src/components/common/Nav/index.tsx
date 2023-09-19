import * as S from "./style";
import NavItem from "./NavItem/index";
import NavUser from "./NavUser/index";
import { useRouter } from "next/router";
import { Logo } from "@checkin/icon";

const Nav = () => {
  const router = useRouter();
  return (
    <S.NavContainer>
      <S.NavTopWrap>
        <Logo onClick={() => router.push("/")} />
        <NavItem />
      </S.NavTopWrap>
      <NavUser />
    </S.NavContainer>
  );
};

export default Nav;
