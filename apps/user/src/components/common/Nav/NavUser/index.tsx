import * as S from "./style";
import { useGetMemberInfo } from "@/queries/Member/Member.query";
import { dataTransform } from "@checkin/util";
import useLogout from "@/hooks/Auth/useLogout";
import { ProfileIcon } from "@checkin/icon";

const NavUser = () => {
  const { data } = useGetMemberInfo();
  const { onLogout } = useLogout();
  return (
    <S.NavBottomBox>
      <S.NavUserBox>
        <S.NavUserImageBackground>
          <ProfileIcon />
        </S.NavUserImageBackground>
        <S.NavUserInfoBox>
          <S.NavUserName>{data?.data.name}</S.NavUserName>
          <S.NavUserGrade>
            {dataTransform.schoolInfoTransform(
              data?.data.studentInfo?.grade || 0,
              data?.data.studentInfo?.room || 0,
              data?.data.studentInfo?.number || 0
            )}
          </S.NavUserGrade>
        </S.NavUserInfoBox>
      </S.NavUserBox>
      <S.NavAuthBox>
        <S.NavLoginText onClick={onLogout}>로그아웃</S.NavLoginText>
      </S.NavAuthBox>
    </S.NavBottomBox>
  );
};

export default NavUser;
