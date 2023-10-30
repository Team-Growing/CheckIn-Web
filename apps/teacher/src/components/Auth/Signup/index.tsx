import React, { Dispatch, ReactNode, SetStateAction } from "react";
import SignupFirst from "./SignupFirst";
import SignupSecond from "./SignupSecond";
import * as S from "../Login/style";
import { useSignup } from "@/hooks/Auth/useSignup";
import { CheckLogo } from "@checkin/icon";
import { SIGNUP_SECTION_NAME } from "@/constant/Signup/Signup.constant";

interface Props {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const Signup = ({ setIsLogin }: Props) => {
  const {
    onChangeSignupData,
    section,
    setSection,
    signupData,
    submitFirstSignup,
    submitSecondSignup,
  } = useSignup();

  const signupComponents: ReactNode[] = [
    <SignupFirst
      signupData={signupData}
      setIsLogin={setIsLogin}
      onChangeSignupData={onChangeSignupData}
      submitFirstSignup={submitFirstSignup}
      key="signupFirst"
    />,
    <SignupSecond
      signupData={signupData}
      setIsLogin={setIsLogin}
      onChangeSignupData={onChangeSignupData}
      submitSecondSignup={submitSecondSignup}
      setSection={setSection}
      key="signupSecond"
    />,
  ];
  return (
    <>
      <S.AuthTopWrap>
        <CheckLogo width="25" height="25" />
        <S.AuthHeading>회원가입</S.AuthHeading>
        <S.AuthSubHeading>
          DAS를 사용하기 위해 회원가입을 진행해주세요
        </S.AuthSubHeading>
      </S.AuthTopWrap>
      {signupComponents.map((component, idx) => {
        return section === SIGNUP_SECTION_NAME[idx].title && component;
      })}
    </>
  );
};

export default Signup;
