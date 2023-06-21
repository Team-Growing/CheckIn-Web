import Image from "next/image";
import * as S from "./style";
import profile from "../../../../assets/Profile/profile.svg";

const NavUser = () => {
  return (
    <S.NavBottomBox>
      <S.NavUserBox>
        <S.NavUserImageBackground>
          <Image src={profile} alt="유저 이미지" />
        </S.NavUserImageBackground>
        <S.NavUserInfoBox>
          <S.NavUserName>백승하</S.NavUserName>
          <S.NavUserGrade>2학년 4반 2번</S.NavUserGrade>
        </S.NavUserInfoBox>
      </S.NavUserBox>
      <S.NavAuthBox>
        <S.NavLoginText>로그인</S.NavLoginText>
        <S.NavLoginText>회원가입</S.NavLoginText>
      </S.NavAuthBox>
    </S.NavBottomBox>
  );
};

export default NavUser;
