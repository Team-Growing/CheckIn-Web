import { NAV_ITEM } from "../constant";
import * as S from "./style";

const NavItem = () => {
  return (
    <S.NavItemBox>
      {NAV_ITEM.map((data, idx) => (
        <S.NavItemText key={idx}>{data.title}</S.NavItemText>
      ))}
    </S.NavItemBox>
  );
};

export default NavItem;
