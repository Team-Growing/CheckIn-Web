import { ChangeEvent, useCallback, useState } from "react";
import { sha512 } from "js-sha512";
import AuthRepositoryImpl from "../../repositories/AuthRepository/AuthRepositoryImpl";
import { StudentInfoType, StudentSignupType } from "@checkin/types";

export const useSignup = () => {
  const [section, setSection] = useState<"first" | "second">("first");
  const [signupData, setSignupData] = useState<StudentSignupType>({
    id: "",
    email: "",
    pw: "",
    name: "",
  });

  const [studentInfoData, setStudentInfoData] = useState<StudentInfoType>({
    grade: 0,
    room: 0,
    number: 0,
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
      setStudentInfoData((prev) => ({ ...prev, [name]: value }));
    },
    [studentInfoData]
  );

  const submitFirstSignup = useCallback(async () => {
    const { id, pw, email, name } = signupData;
    if (id === "" || pw === "" || email === "" || name === "") {
      window.alert("양식이 비었습니다");
      return;
    }
    setSection("second");
  }, [signupData]);

  const submitSecondSignup = useCallback(async () => {
    const { pw } = signupData;
    const { grade, number, room } = studentInfoData;

    const validStudentSignupData = {
      ...signupData,
      pw: sha512(pw),
      studentInfo: {
        grade: Number(grade),
        number: Number(number),
        room: Number(room),
      },
    };
    try {
      await AuthRepositoryImpl.signupStudent(validStudentSignupData);
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
    studentInfoData,
    onChangeSignupData,
    submitFirstSignup,
    submitSecondSignup,
    onChangeSignupStudentInfoData,
  };
};
