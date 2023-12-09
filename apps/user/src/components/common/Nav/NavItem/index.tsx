import { NAV_ITEM } from "../constant";
import * as S from "./style";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = () => {
  const pathname = usePathname();
  return (
    <S.NavItemWrap>
      {NAV_ITEM.map((data, idx) => (
        <Link key={idx} href={data.path}>
          <S.NavItemBox
            isMatch={data.pathname == pathname ? true : false}
            key={idx}
          >
            <data.icon isMatch={data.pathname == pathname ? true : false} />
            <S.NavItemText>{data.title}</S.NavItemText>
          </S.NavItemBox>
        </Link>
      ))}
    </S.NavItemWrap>
  );
};

export default NavItem;
