import * as S from "./style";
import { useRouter } from "next/router";
import { useGetMemberInfo } from "@/queries/Member/Member.query";
import dataTransform from "@checkin/uitl/util/dataTransform";

const NavUser = () => {
  const router = useRouter();
  const { data } = useGetMemberInfo();

  return (
    <S.NavBottomBox>
      <S.NavUserBox>
        <S.NavUserImageBackground></S.NavUserImageBackground>
        <S.NavUserInfoBox>
          <S.NavUserName>{data?.data.name}</S.NavUserName>
          <S.NavUserGrade>
            {dataTransform.schoolInfoTransform(
              data?.data.studentInfo.grade || 0,
              data?.data.studentInfo.room || 0,
              data?.data.studentInfo.number || 0
            )}
          </S.NavUserGrade>
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
