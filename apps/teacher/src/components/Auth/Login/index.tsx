import * as S from "./style";
import { Dispatch, SetStateAction } from "react";
import { useLogin } from "@/hooks/Auth/useLogin";
import { CheckLogo, IDIcon, PWIcon } from "@checkin/icon";

interface Props {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setIsLogin }: Props) => {
  const { idRef, onLogin, pwRef } = useLogin();
  return (
    <>
      <S.LoginContainer onSubmit={onLogin}>
        <S.AuthTopWrap>
          <CheckLogo width="25" height="25" />
          <S.AuthHeading>로그인</S.AuthHeading>
          <S.AuthSubHeading>
            체크인을 사용하기 위해 로그인을 진행해주세요
          </S.AuthSubHeading>
        </S.AuthTopWrap>
        <S.AuthInputWrap>
          <S.AuthFlex>
            <S.AuthText>ID</S.AuthText>
            <IDIcon />
          </S.AuthFlex>
          <S.AuthInput name="id" ref={idRef} />
        </S.AuthInputWrap>
        <S.AuthInputWrap>
          <S.AuthFlex>
            <S.AuthText>비밀번호</S.AuthText>
            <PWIcon />
          </S.AuthFlex>
          <S.AuthInput type="password" name="pw" ref={pwRef} />
        </S.AuthInputWrap>
        <S.AuthSubmitBtn>LOGIN</S.AuthSubmitBtn>
        <S.AuthOppositePartWrap
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "14px",
          }}
        >
          <S.AuthOppositePartText>
            아직 계정이 없으신가요?
          </S.AuthOppositePartText>
          <S.AuthOppositePartButton onClick={() => setIsLogin(false)}>
            회원가입
          </S.AuthOppositePartButton>
        </S.AuthOppositePartWrap>
      </S.LoginContainer>
    </>
  );
};

export default Login;
