import * as S from "./style";
import { dataTransform } from "@checkin/util";
import useLogout from "@/hooks/Auth/useLogout";
import { ProfileIcon } from "@checkin/icon";
import { useGetMemberInfo } from "@/queries/Member/query";

const NavUser = () => {
  const { data } = useGetMemberInfo();
  const { onLogout } = useLogout();
  console.log(data);

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
      </S.NavAuthBox>
    </S.NavBottomBox>
  );
};

export default NavUser;
