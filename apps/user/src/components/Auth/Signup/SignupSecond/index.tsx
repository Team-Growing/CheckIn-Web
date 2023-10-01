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
import { AuthInputWrap } from "@checkin/ui";

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
        <AuthInputWrap
          customStyle={{ width: "90%" }}
          require={true}
          inputTitle="학년"
          name="grade"
          value={studentInfoData.grade}
          onChange={onChangeSignupStudentInfoData}
        />
        <AuthInputWrap
          customStyle={{ width: "90%" }}
          require={true}
          inputTitle="반"
          name="room"
          value={studentInfoData.room}
          onChange={onChangeSignupStudentInfoData}
        />
        <AuthInputWrap
          customStyle={{ width: "90%" }}
          require={true}
          inputTitle="번호"
          name="number"
          value={studentInfoData.number}
          onChange={onChangeSignupStudentInfoData}
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
