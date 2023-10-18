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
import { TeacherSignupType } from "@checkin/types";
import { AuthInputWrap } from "@checkin/ui";

interface Props {
  setSection: React.Dispatch<React.SetStateAction<"first" | "second">>;
  submitSecondSignup: () => Promise<void>;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  signupData: TeacherSignupType;
  onChangeSignupData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignupSecond = ({
  setSection,
  submitSecondSignup,
  setIsLogin,
  signupData,
  onChangeSignupData,
}: Props) => {
  return (
    <>
      <S.SignupSecondInputContainer>
        <AuthInputWrap
          customStyle={{ width: "90%" }}
          require={true}
          inputTitle="담당과목"
          name="subject"
          value={signupData.subject}
          onChange={onChangeSignupData}
        />
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
