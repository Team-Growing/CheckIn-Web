import { ChangeEvent, useCallback, useState } from "react";
import { sha512 } from "js-sha512";
import AuthRepositoryImpl from "../../repositories/AuthRepository/AuthRepositoryImpl";
import { TeacherSignupType } from "@checkin/types";
import { patternCheck } from "@checkin/util";
import { CheckinToast } from "@checkin/toast";

export const useSignup = () => {
  const [section, setSection] = useState<"first" | "second">("first");
  const [signupData, setSignupData] = useState<TeacherSignupType>({
    id: "",
    email: "",
    pw: "",
    name: "",
    subject: "",
  });

  const onChangeSignupData = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setSignupData((prev) => ({ ...prev, [name]: value }));
    },
    [signupData]
  );

  const submitFirstSignup = useCallback(async () => {
    const { id, pw, email, name } = signupData;
    if (id === "" || pw === "" || email === "" || name === "") {
      window.alert("양식이 비었습니다");
      return;
    }

    if (!patternCheck.idCheck(id)) {
      CheckinToast.showInfo("아이디 형식을 지켜주세요");
      return;
    }

    if (!patternCheck.pwCheck(pw)) {
      CheckinToast.showInfo("비밀번호 형식을 지켜주세요");
      return;
    }

    if (!patternCheck.emailCheck(email)) {
      CheckinToast.showInfo("이메일 형식을 지켜주세요");
      return;
    }

    setSection("second");
  }, [signupData]);

  const submitSecondSignup = useCallback(async () => {
    const { pw, subject } = signupData;
    if (subject === "") {
      CheckinToast.showInfo("담당과목을 입력해주세요");
      return;
    }

    const validStudentSignupData = {
      ...signupData,
      pw: sha512(pw),
    };
    try {
      await AuthRepositoryImpl.signupTeacher(validStudentSignupData);
      window.alert("회원가입에 성공했습니다.(관리자 승인을 기다려주세요!)");
      window.location.reload();
    } catch {
      window.alert("실패");
    }
  }, [signupData]);

  return {
    section,
    setSection,
    signupData,
    onChangeSignupData,
    submitFirstSignup,
    submitSecondSignup,
  };
};
