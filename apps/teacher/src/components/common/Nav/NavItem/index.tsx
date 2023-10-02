import { useRouter } from "next/router";
import { NAV_ITEM } from "../constant";
import * as S from "./style";

const NavItem = () => {
  const { pathname, push } = useRouter();

  return (
    <S.NavItemWrap>
      {NAV_ITEM.map((data, idx) => (
        <S.NavItemBox
          isMatch={data.path == pathname ? true : false}
          key={idx}
          onClick={() => push(data.path)}
        >
          <data.icon isMatch={data.path == pathname ? true : false} />
          <S.NavItemText>{data.title}</S.NavItemText>
        </S.NavItemBox>
      ))}
    </S.NavItemWrap>
  );
};

export default NavItem;
