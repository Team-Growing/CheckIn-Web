import React from "react";
import * as S from "./style";
import SignupImg from "../../../../assets/Image/SignupImg.svg";
import { SignupSecondSubmitBtn } from "../SignupFirst/style";
import { AuthFlex } from "../../Login/style";
import { IoIosArrowBack } from "react-icons/io";
import { UserRole } from "@/hooks/Auth/useSignup";
import { SignupStudentInfo } from "@checkin/types";

export type Role = "student" | "teacher";

interface Props {
  setSection: React.Dispatch<React.SetStateAction<"first" | "second">>;
  onChangeSignupStudentInfoData: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  signupStudentInfo: SignupStudentInfo;
  submitSecondStudentSignup: () => Promise<void>;
  role: UserRole;
}

const SignupSecond = ({
  onChangeSignupStudentInfoData,
  setSection,
  signupStudentInfo,
  submitSecondStudentSignup,
  role,
}: Props) => {
  return (
    <>
      {role == "student" ? (
        <>
          {" "}
          <S.SignupSecondInputContainer>
            <S.SigupSecondInputWrap>
              <S.SignupRequireText>
                학년 <span>*</span>
              </S.SignupRequireText>
              <S.SignupSecondInput
                type="student"
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
                type="student"
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
                type="student"
                name="number"
                value={signupStudentInfo.number}
                onChange={onChangeSignupStudentInfoData}
              />
            </S.SigupSecondInputWrap>
          </S.SignupSecondInputContainer>
        </>
      ) : (
        <>
          <S.SignupSecondInputContainer>
            <S.SigupSecondInputWrap>
              <S.SignupRequireText>
                담당 과목 <span>*</span>
              </S.SignupRequireText>
              <S.SignupSecondInput
                type="teacher"
                name="subject"
                value={signupStudentInfo.grade}
                onChange={onChangeSignupStudentInfoData}
              />
            </S.SigupSecondInputWrap>
          </S.SignupSecondInputContainer>
        </>
      )}

      <S.SignupIntroText>
        DAS와 함께 간편한 방과후 생활을 누려보세요!
      </S.SignupIntroText>
      <S.SignupImage src={SignupImg} width={420} height={280} alt="" />
      <AuthFlex>
        <S.SignupSecondPrevBtn onClick={() => setSection("first")}>
          <IoIosArrowBack />
          이전
        </S.SignupSecondPrevBtn>
        <SignupSecondSubmitBtn onClick={submitSecondStudentSignup}>
          Check In 가입하기
        </SignupSecondSubmitBtn>
      </AuthFlex>
    </>
  );
};

export default SignupSecond;
