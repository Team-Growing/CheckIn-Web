import * as S from "./style";
import { UserRole } from "@/hooks/Auth/useSignup";
import {
  AuthOppositePartButton,
  AuthOppositePartText,
  AuthOppositePartWrap,
} from "../../style";
import { IoIosArrowForward } from "react-icons/io";
import { SignupStudentData } from "@checkin/types";
interface Props {
  signupData: SignupStudentData;
  onChangeSignupData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitFirstSignup: () => void;
  role: UserRole;
  setRole: React.Dispatch<React.SetStateAction<UserRole>>;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignupFirst = ({
  onChangeSignupData,
  signupData,
  submitFirstSignup,
  role,
  setRole,
  setIsLogin,
}: Props) => {
  return (
    <>
      <S.AuthSelectUserWrap>
        <S.AuthStudentBox onClick={() => setRole("student")} role={role}>
          학생
        </S.AuthStudentBox>
        <S.AuthTeacherBox onClick={() => setRole("teacher")} role={role}>
          선생님
        </S.AuthTeacherBox>
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
        <AuthOppositePartWrap>
          <AuthOppositePartText>계정이 있으신가요?</AuthOppositePartText>
          <AuthOppositePartButton onClick={() => setIsLogin(true)}>
            로그인
          </AuthOppositePartButton>
        </AuthOppositePartWrap>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <S.SignupSubmitBtn onClick={submitFirstSignup}>
            다음 <IoIosArrowForward />
          </S.SignupSubmitBtn>
        </div>
      </S.SignupInputContainer>
    </>
  );
};

export default SignupFirst;
