import * as S from "./style";
import { StudentSignupType } from "@checkin/types";
import * as LoginS from "../../Login/style";
import { Flex, InputWrap, NextButton } from "@checkin/ui";
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
        <InputWrap>
          <S.SignupRequireText>
            이름 <span>*</span>
          </S.SignupRequireText>
          <S.SignupInput
            name="name"
            value={signupData.name}
            onChange={onChangeSignupData}
          />
        </InputWrap>
        <InputWrap>
          <S.SignupRequireText>
            아이디 <span>*</span>
          </S.SignupRequireText>
          <S.SignupInput
            name="id"
            value={signupData.id}
            onChange={onChangeSignupData}
          />
        </InputWrap>
        <InputWrap>
          <S.SignupRequireText>
            비밀번호 <span>*</span>
          </S.SignupRequireText>
          <S.SignupInput
            type="password"
            name="pw"
            value={signupData.pw}
            onChange={onChangeSignupData}
          />
        </InputWrap>
        <InputWrap>
          <S.SignupRequireText>
            Email <span>*</span>
          </S.SignupRequireText>
          <S.SignupInput
            name="email"
            value={signupData.email}
            onChange={onChangeSignupData}
          />
        </InputWrap>
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
