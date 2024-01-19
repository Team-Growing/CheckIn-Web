import { NAV_ITEM } from "../constant";
import * as S from "./style";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = () => {
  const pathname = usePathname();

  const isPathMatch = (path: string, currentPath: string): boolean => {
    const regex = new RegExp(`^${path.replace(/\[.*\]/, "\\d+")}$`);
    return regex.test(currentPath);
  };

  return (
    <S.NavItemWrap>
      {NAV_ITEM.map((data, idx) => (
        <Link key={idx} href={data.path}>
          <S.NavItemBox
            isMatch={isPathMatch(data.pathname, pathname)}
            key={idx}
          >
            <data.icon isMatch={isPathMatch(data.pathname, pathname)} />
            <S.NavItemText>{data.title}</S.NavItemText>
          </S.NavItemBox>
        </Link>
      ))}
    </S.NavItemWrap>
  );
};

export default NavItem;
