import * as S from "./style";
import CheckLogo from "../../../assets/Logo/CheckLogo.svg";
import UserIcon from "../../../assets/Icon/UserIcon.svg";
import { Dispatch, SetStateAction } from "react";
import { useLogin } from "@/hooks/Auth/useLogin";
import {
  AuthOppositePartButton,
  AuthOppositePartText,
  AuthOppositePartWrap,
} from "../style";

interface Props {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setIsLogin }: Props) => {
  const { loginData, onChangeLoginData, submitLoginData } = useLogin();
  return (
    <S.AuthWrap onSubmit={submitLoginData}>
      <S.AuthTopWrap>
        <S.AuthWrapImage
          width={25}
          height={25}
          src={CheckLogo.src}
          alt="이미지 없음"
        />
        <S.AuthHeading>로그인</S.AuthHeading>
        <S.AuthSubHeading>
          체크인을 사용하기 위해 로그인을 진행해주세요
        </S.AuthSubHeading>
      </S.AuthTopWrap>
      <S.AuthInputWrap>
        <S.AuthFlex>
          <S.AuthText>ID</S.AuthText>
          <S.AuthUserIcon
            src={UserIcon.src}
            width={16}
            height={16}
            alt="이미지 없음"
          />
        </S.AuthFlex>
        <S.AuthInput
          name="id"
          value={loginData.id}
          onChange={onChangeLoginData}
        />
      </S.AuthInputWrap>
      <S.AuthInputWrap>
        <S.AuthFlex>
          <S.AuthText>비밀번호</S.AuthText>
          <S.AuthUserIcon
            src={UserIcon.src}
            width={16}
            height={16}
            alt="이미지 없음"
          />
        </S.AuthFlex>
        <S.AuthInput
          type="password"
          name="pw"
          value={loginData.pw}
          onChange={onChangeLoginData}
        />
      </S.AuthInputWrap>
      <S.AuthSubmitBtn>LOGIN</S.AuthSubmitBtn>
      <AuthOppositePartWrap
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "14px",
        }}
      >
        <AuthOppositePartText>아직 계정이 없으신가요?</AuthOppositePartText>
        <AuthOppositePartButton onClick={() => setIsLogin(false)}>
          회원가입
        </AuthOppositePartButton>
      </AuthOppositePartWrap>
    </S.AuthWrap>
  );
};

export default Login;
