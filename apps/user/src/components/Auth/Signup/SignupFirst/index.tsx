import * as S from "./style";
import { StudentSignupType } from "@checkin/types";
import * as LoginS from "../../Login/style";
import { Flex, AuthInputWrap, NextButton } from "@checkin/ui";
interface Props {
  signupData: StudentSignupType;
  onChangeSignupData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitFirstSignup: () => void;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignupFirst = ({
  onChangeSignupData,
  signupData,
  submitFirstSignup,
  setIsLogin,
}: Props) => {
  return (
    <>
      <S.SignupInputContainer>
        <AuthInputWrap
          require={true}
          inputTitle="이름"
          value={signupData.name}
          name="name"
          onChange={onChangeSignupData}
        />
        <AuthInputWrap
          require={true}
          inputTitle="아이디"
          value={signupData.id}
          name="id"
          onChange={onChangeSignupData}
        />
        <AuthInputWrap
          require={true}
          inputTitle="비밀번호"
          type="password"
          value={signupData.pw}
          name="pw"
          onChange={onChangeSignupData}
        />
        <AuthInputWrap
          require={true}
          inputTitle="Email"
          value={signupData.email}
          name="email"
          onChange={onChangeSignupData}
        />
        <LoginS.AuthOppositePartWrap>
          <LoginS.AuthOppositePartText>
            계정이 있으신가요?
          </LoginS.AuthOppositePartText>
          <LoginS.AuthOppositePartButton onClick={() => setIsLogin(true)}>
            로그인
          </LoginS.AuthOppositePartButton>
        </LoginS.AuthOppositePartWrap>
        <Flex justify="end">
          <NextButton
            style={{ width: "138px" }}
            type="primary"
            onClick={submitFirstSignup}
          >
            다음
          </NextButton>
        </Flex>
      </S.SignupInputContainer>
    </>
  );
};

export default SignupFirst;
