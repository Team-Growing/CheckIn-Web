import { useRouter } from "next/router";
import * as S from "./style";
import Link from "next/link";
import { useGetTodayMyLecturesQuery } from "@/queries/Lectures/query";
import { MypageIcon, SchoolIcon } from "@checkin/icon";

const NavItem = () => {
  const { pathname } = useRouter();
  const { data } = useGetTodayMyLecturesQuery();
  const firstLectureId = data?.data[0].lectureId.value;

  return (
    <S.NavItemWrap>
      <Link href={`/attend/${firstLectureId}`}>
        <S.NavItemBox isMatch={"/attend/[id]" == pathname ? true : false}>
          <SchoolIcon isMatch={"/attend/[id]" == pathname ? true : false} />
          <S.NavItemText>방과후 출석 확인</S.NavItemText>
        </S.NavItemBox>
      </Link>

      <Link href={"/myinfo"}>
        <S.NavItemBox isMatch={"/myinfo" == pathname ? true : false}>
          <MypageIcon isMatch={"/myinfo" == pathname ? true : false} />
          <S.NavItemText>마이페이지</S.NavItemText>
        </S.NavItemBox>
      </Link>
    </S.NavItemWrap>
  );
};

export default NavItem;
