import React, { Dispatch, ReactNode, SetStateAction } from "react";
import SignupFirst from "./SignupFirst";
import SignupSecond from "./SignupSecond";
import * as S from "../Login/style";
import CheckLogo from "../../../assets/Logo/CheckLogo.svg";
import { SIGNUP_SECTION_NAME } from "@/constant/Signup/Signup.constant";
import { useSignup } from "@/hooks/Auth/useSignup";
import { NextButton } from "@checkin/ui";

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
    onChangeSignupStudentInfoData,
    studentInfoData,
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
      setIsLogin={setIsLogin}
      studentInfoData={studentInfoData}
      submitSecondSignup={submitSecondSignup}
      setSection={setSection}
      onChangeSignupStudentInfoData={onChangeSignupStudentInfoData}
      key="signupSecond"
    />,
  ];
  return (
    <>
      <S.AuthTopWrap>
        <S.AuthWrapImage
          width={25}
          height={25}
          src={CheckLogo.src}
          alt="이미지 없음"
        />
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
