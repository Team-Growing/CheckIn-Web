import * as S from "./style";
import { ProfileIcon } from "@checkin/icon";
import { useGetMemberInfoQuery } from "@/queries/Member/query";
import useLogout from "@/hooks/Auth/useLogout";

const NavUser = () => {
  const { data } = useGetMemberInfoQuery();
  const { onLogout } = useLogout();

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
        <S.NavLoginText onClick={onLogout}>로그아웃</S.NavLoginText>
        {/* <S.NavLoginText>회원가입</S.NavLoginText> */}
      </S.NavAuthBox>
    </S.NavBottomBox>
  );
};

export default NavUser;
