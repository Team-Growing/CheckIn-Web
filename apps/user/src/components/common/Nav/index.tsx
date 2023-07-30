import * as S from "./style";
import logo from "../../../assets/Logo/logo.svg";
import Image from "next/image";
import NavItem from "./NavItem/index";
import NavUser from "./NavUser/index";

const Nav = () => {
  return (
    <S.NavContainer>
      <Image src={logo} alt="메인 로고" />
      <NavItem />
      <NavUser />
    </S.NavContainer>
  );
};

export default Nav;
