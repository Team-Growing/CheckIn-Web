import * as S from "./style";
import { SignupStudentData } from "../../../../types/Auth/Signup/Signup.type";

interface Props {
  signupData: SignupStudentData;
  onChangeSignupData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitFirstSignup: () => void;
}

const SignupFirst = ({
  onChangeSignupData,
  signupData,
  submitFirstSignup,
}: Props) => {
  return (
    <>
      <S.AuthSelectUserWrap>
        <S.AuthStudentBox>학생</S.AuthStudentBox>
        <S.AuthTeacherBox>교직원</S.AuthTeacherBox>
      </S.AuthSelectUserWrap>
      <S.SignupInputContainer>
        <S.SignupInputWrap>
          <S.SignupRequireText>
            이름 <span>*</span>
          </S.SignupRequireText>
          <S.SignupInput
            name="name"
            value={signupData.name}
            onChange={onChangeSignupData}
          />
        </S.SignupInputWrap>
        <S.SignupInputWrap>
          <S.SignupRequireText>
            아이디 <span>*</span>
          </S.SignupRequireText>
          <S.SignupInput
            name="id"
            value={signupData.id}
            onChange={onChangeSignupData}
          />
        </S.SignupInputWrap>
        <S.SignupInputWrap>
          <S.SignupRequireText>
            비밀번호 <span>*</span>
          </S.SignupRequireText>
          <S.SignupInput
            type="password"
            name="pw"
            value={signupData.pw}
            onChange={onChangeSignupData}
          />
        </S.SignupInputWrap>
        <S.SignupInputWrap>
          <S.SignupRequireText>
            Email <span>*</span>
          </S.SignupRequireText>
          <S.SignupInput
            name="email"
            value={signupData.email}
            onChange={onChangeSignupData}
          />
        </S.SignupInputWrap>
        <S.SignupSubmitBtn onClick={submitFirstSignup}>다음</S.SignupSubmitBtn>
      </S.SignupInputContainer>
    </>
  );
};

export default SignupFirst;
