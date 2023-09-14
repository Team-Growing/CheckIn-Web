import React from "react";
import * as S from "./style";
import SignupImg from "../../../../assets/Image/SignupImg.svg";
import { SignupSecondSubmitBtn } from "../SignupFirst/style";
import {
  AuthFlex,
  AuthOppositePartButton,
  AuthOppositePartText,
  AuthOppositePartWrap,
} from "../../Login/style";
import { IoIosArrowBack } from "react-icons/io";
import { StudentInfoType } from "@checkin/types";

export type Role = "student" | "teacher";

interface Props {
  setSection: React.Dispatch<React.SetStateAction<"first" | "second">>;
  onChangeSignupStudentInfoData: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  studentInfoData: StudentInfoType;
  submitSecondSignup: () => Promise<void>;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignupSecond = ({
  onChangeSignupStudentInfoData,
  setSection,
  studentInfoData,
  submitSecondSignup,
  setIsLogin,
}: Props) => {
  return (
    <>
      <S.SignupSecondInputContainer>
        <S.SigupSecondInputWrap>
          <S.SignupRequireText>
            학년 <span>*</span>
          </S.SignupRequireText>
          <S.SignupSecondInput
            type="student"
            name="grade"
            value={studentInfoData.grade}
            onChange={onChangeSignupStudentInfoData}
          />
        </S.SigupSecondInputWrap>
        <S.SigupSecondInputWrap>
          <S.SignupRequireText>
            반 <span>*</span>
          </S.SignupRequireText>
          <S.SignupSecondInput
            type="student"
            name="room"
            value={studentInfoData.room}
            onChange={onChangeSignupStudentInfoData}
          />
        </S.SigupSecondInputWrap>
        <S.SigupSecondInputWrap>
          <S.SignupRequireText>
            번호 <span>*</span>
          </S.SignupRequireText>
          <S.SignupSecondInput
            type="student"
            name="number"
            value={studentInfoData.number}
            onChange={onChangeSignupStudentInfoData}
          />
        </S.SigupSecondInputWrap>
      </S.SignupSecondInputContainer>
      <S.SignupIntroText>
        DAS와 함께 간편한 방과후 생활을 누려보세요!
      </S.SignupIntroText>
      <S.SignupImage src={SignupImg} width={420} height={280} alt="" />
      <AuthOppositePartWrap>
        <AuthOppositePartText>계정이 있으신가요?</AuthOppositePartText>
        <AuthOppositePartButton onClick={() => setIsLogin(true)}>
          로그인
        </AuthOppositePartButton>
      </AuthOppositePartWrap>
      <AuthFlex>
        <S.SignupSecondPrevBtn onClick={() => setSection("first")}>
          <IoIosArrowBack />
          이전
        </S.SignupSecondPrevBtn>
        <SignupSecondSubmitBtn onClick={submitSecondSignup}>
          Check In 가입하기
        </SignupSecondSubmitBtn>
      </AuthFlex>
    </>
  );
};

export default SignupSecond;
