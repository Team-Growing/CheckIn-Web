import { Router, useRouter } from "next/router";
import { ChangeEvent, useCallback, useState } from "react";
import { useQueryClient } from "react-query";
import {
  SignupStudentInfo,
  SignupStudentData,
  SignupStudent,
} from "../../types/Auth/Signup/Signup.type";
import { sha512 } from "js-sha512";
import AuthRepositoryImpl from "../../repositories/Auth/AuthRepositoryImpl";

export const useSignup = () => {
  const router = useRouter();
  const [section, setSection] = useState<"first" | "second">("first");
  const [signupData, setSignupData] = useState<SignupStudentData>({
    email: "",
    id: "",
    name: "",
    pw: "",
  });
  const [signupStudentInfo, setIsSignupStudentInfo] =
    useState<SignupStudentInfo>({
      grade: 0,
      number: 0,
      room: 0,
    });

  const onChangeSignupData = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setSignupData((prev) => ({ ...prev, [name]: value }));
    },
    [signupData]
  );

  const onChangeSignupStudentInfoData = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setIsSignupStudentInfo((prev) => ({ ...prev, [name]: value }));
    },
    [signupData]
  );

  const submitFirstSignup = useCallback(() => {
    const { id, pw, email, name } = signupData;
    if (id === "" || pw === "" || email === "" || name === "") {
      window.alert("양식이 비었습니다");
      return;
    }
    setSection("second");
  }, [signupData]);

  const submitSecondSignup = useCallback(async () => {
    const { pw } = signupData;
    const { grade, number, room } = signupStudentInfo;
    const validSignupData: SignupStudent = {
      ...signupData,
      pw: sha512(pw),
      studentInfo: {
        grade: Number(grade),
        number: Number(number),
        room: Number(room),
      },
    };

    try {
      await AuthRepositoryImpl.signupStudent(validSignupData);
      window.alert("회원가입에 성공했습니다.(관리자 승인을 기다려주세요!)");
      router.push("/sign");
    } catch {
      console.log(validSignupData);

      window.alert("실패");
    }
  }, [signupData]);

  return {
    section,
    setSection,
    signupData,
    signupStudentInfo,
    onChangeSignupData,
    submitFirstSignup,
    submitSecondSignup,
    onChangeSignupStudentInfoData,
  };
};
