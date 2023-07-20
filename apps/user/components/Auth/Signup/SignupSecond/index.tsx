import React from "react";
import * as S from "./style";
import SignupImg from "../../../../assets/Image/SignupImg.svg";
import { SignupStudentInfo } from "../../../../types/Auth/Signup/Signup.type";

interface Props {
  setSection: React.Dispatch<React.SetStateAction<"first" | "second">>;
  onChangeSignupStudentInfoData: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  signupStudentInfo: SignupStudentInfo;
  submitSecondSignup: () => Promise<void>;
}

const SignupSecond = ({
  onChangeSignupStudentInfoData,
  setSection,
  signupStudentInfo,
  submitSecondSignup,
}: Props) => {
  return (
    <>
      <S.SignupSecondInputContainer>
        <S.SigupSecondInputWrap>
          <S.SignupRequireText>
            학년 <span>*</span>
          </S.SignupRequireText>
          <S.SignupSecondInput
            name="grade"
            value={signupStudentInfo.grade}
            onChange={onChangeSignupStudentInfoData}
          />
        </S.SigupSecondInputWrap>
        <S.SigupSecondInputWrap>
          <S.SignupRequireText>
            반 <span>*</span>
          </S.SignupRequireText>
          <S.SignupSecondInput
            name="room"
            value={signupStudentInfo.room}
            onChange={onChangeSignupStudentInfoData}
          />
        </S.SigupSecondInputWrap>
        <S.SigupSecondInputWrap>
          <S.SignupRequireText>
            번호 <span>*</span>
          </S.SignupRequireText>
          <S.SignupSecondInput
            name="number"
            value={signupStudentInfo.number}
            onChange={onChangeSignupStudentInfoData}
          />
        </S.SigupSecondInputWrap>
      </S.SignupSecondInputContainer>
      <S.SignupIntroText>
        DAS와 함께 간편한 방과후 생활을 누려보세요!
      </S.SignupIntroText>
      <S.SignupImage src={SignupImg} width={420} height={280} alt="" />
      <S.SignupSubmitBtn onClick={submitSecondSignup}>
        회원가입
      </S.SignupSubmitBtn>
    </>
  );
};

export default SignupSecond;
