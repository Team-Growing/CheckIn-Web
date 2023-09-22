import * as S from "./style";
import { useRouter } from "next/router";
import { ProfileIcon } from "@checkin/icon";
import { useGetMemberInfo } from "@/queries/Member/query";

const NavUser = () => {
  const { data } = useGetMemberInfo();
  const router = useRouter();

  return (
    <S.NavBottomBox>
      <S.NavUserBox>
        <S.NavUserImageBackground>
          <ProfileIcon />
        </S.NavUserImageBackground>
        <S.NavUserInfoBox>
          <S.NavUserName>{data?.data.name}</S.NavUserName>
          <S.NavUserGrade>{data?.data.memberRole}</S.NavUserGrade>
        </S.NavUserInfoBox>
      </S.NavUserBox>
      <S.NavAuthBox>
        <S.NavLoginText onClick={() => router.push("/sign")}>
          로그인
        </S.NavLoginText>
        <S.NavLoginText>회원가입</S.NavLoginText>
      </S.NavAuthBox>
    </S.NavBottomBox>
  );
};

export default NavUser;
