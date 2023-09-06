import React, { Dispatch, ReactNode, SetStateAction } from "react";
import SignupFirst from "./SignupFirst";
import SignupSecond from "./SignupSecond";
import * as S from "../Login/style";
import CheckLogo from "../../../assets/Logo/CheckLogo.svg";
import { SIGNUP_SECTION_NAME } from "@/constant/Signup/Signup.constant";
import { useSignup } from "@/hooks/Auth/useSignup";

interface Props {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const Signup = ({ setIsLogin }: Props) => {
  const {
    onChangeSignupData,
    section,
    setSection,
    signupData,
    signupStudentInfo,
    submitFirstSignup,
    submitSecondStudentSignup,
    onChangeSignupStudentInfoData,
    role,
    setRole,
  } = useSignup();

  const signupComponents: ReactNode[] = [
    <SignupFirst
      signupData={signupData}
      role={role}
      setIsLogin={setIsLogin}
      setRole={setRole}
      onChangeSignupData={onChangeSignupData}
      submitFirstSignup={submitFirstSignup}
      key="signupFirst"
    />,
    <SignupSecond
      setSection={setSection}
      onChangeSignupStudentInfoData={onChangeSignupStudentInfoData}
      signupStudentInfo={signupStudentInfo}
      submitSecondStudentSignup={submitSecondStudentSignup}
      key="signupSecond"
    />,
  ];
  return (
    <>
      <S.AuthWrap>
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
      </S.AuthWrap>
    </>
  );
};

export default Signup;