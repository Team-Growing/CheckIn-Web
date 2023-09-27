import * as S from "./style";
import logo from "../../../assets/Logo/logo.svg";
import NavItem from "./SidebarItem/index";
import NavUser from "./";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <S.NavContainer>
      <S.NavTopWrap>
        <S.NavLogo
          src={logo.src}
          width={125}
          height={38}
          alt="메인 로고"
          onClick={() => router.push("/")}
        />
        <NavItem />
      </S.NavTopWrap>
      <NavUser />
    </S.NavContainer>
  );
};

export default Nav;
