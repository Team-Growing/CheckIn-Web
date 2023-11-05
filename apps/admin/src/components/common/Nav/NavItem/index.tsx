import { useRouter } from "next/router";
import { NAV_ITEM } from "../constant";
import * as S from "./style";
import Link from "next/link";

const NavItem = () => {
  const { pathname, push } = useRouter();

  return (
    <S.NavItemWrap>
      {NAV_ITEM.map((data, idx) => (
        <Link href={data.path} key={idx}>
          <S.NavItemBox
            isMatch={data.path == pathname ? true : false}
            key={idx}
          >
            <data.icon isMatch={data.path == pathname ? true : false} />
            <S.NavItemText>{data.title}</S.NavItemText>
          </S.NavItemBox>
        </Link>
      ))}
    </S.NavItemWrap>
  );
};

export default NavItem;
