import Image from "next/image";
import * as S from "./style";
import profile from "../../../../assets/Icon/ProfileIcon.svg";
import { useRouter } from "next/router";
import { useGetMemberInfo } from "@/queries/Member/Member.query";

const NavUser = () => {
  const router = useRouter();
  const { data } = useGetMemberInfo();
  console.log(data);

  return (
    <S.NavBottomBox>
      <S.NavUserBox>
        <S.NavUserImageBackground></S.NavUserImageBackground>
        <S.NavUserInfoBox>
          <S.NavUserName>{data?.data.name}</S.NavUserName>
          <S.NavUserGrade>{`${data?.data.studentInfo.grade}학년 ${data?.data.studentInfo.room}반 ${data?.data.studentInfo.number}번`}</S.NavUserGrade>
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
