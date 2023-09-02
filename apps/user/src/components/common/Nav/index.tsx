import * as S from "./style";
import logo from "../../../assets/Logo/logo.svg";
import Image from "next/image";
import NavItem from "./NavItem/index";
import NavUser from "./NavUser/index";
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
