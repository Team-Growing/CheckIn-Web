import * as S from "./style";
import CheckLogo from "../../../assets/Logo/CheckLogo.svg";
import UserIcon from "../../../assets/Icon/UserIcon.svg";
import { Dispatch, SetStateAction } from "react";
import { useLogin } from "../../../hooks/Auth/useLogin";

interface Props {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setIsLogin }: Props) => {
  const { loginData, onChangeLoginData, submitSecondSignup } = useLogin();
  return (
    <S.AuthWrap>
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
      <S.AuthSubmitBtn onClick={submitSecondSignup}>LOGIN</S.AuthSubmitBtn>
      <S.AuthCheckText onClick={() => setIsLogin(false)}>
        DAS 회원이 아니신가요?
      </S.AuthCheckText>
    </S.AuthWrap>
  );
};

export default Login;
