import { ChangeEvent, useCallback, useState } from "react";
import { sha512 } from "js-sha512";
import AuthRepositoryImpl from "../../repositories/AuthRepository/AuthRepositoryImpl";
import {
  SignupStudent,
  SignupStudentData,
  SignupStudentInfo,
  SignupTeacher,
} from "@checkin/types";

export type UserRole = "student" | "teacher";

export const useSignup = () => {
  const [section, setSection] = useState<"first" | "second">("first");
  const [role, setRole] = useState<UserRole>("student");
  const [signupData, setSignupData] = useState<SignupStudentData>({
    email: "",
    id: "",
    name: "",
    pw: "",
    subject: "",
  });
  const [signupStudentInfo, setSignupStudentInfo] = useState<SignupStudentInfo>(
    {
      grade: 0,
      number: 0,
      room: 0,
    }
  );

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
      setSignupStudentInfo((prev) => ({ ...prev, [name]: value }));
    },
    [signupStudentInfo]
  );

  const submitFirstSignup = useCallback(async () => {
    const { id, pw, email, name } = signupData;
    if (id === "" || pw === "" || email === "" || name === "") {
      window.alert("양식이 비었습니다");
      return;
    }

    if (role === "student") {
      setSection("second");
    } else if (role === "teacher") {
      const validTeacherSignupData: SignupTeacher = {
        ...signupData,
        pw: sha512(pw),
      };
      try {
        await AuthRepositoryImpl.signupTeacher(validTeacherSignupData);
        window.alert(
          "선생님 회원가입 성공회원가입에 성공했습니다.(관리자 승인을 기다려주세요!)"
        );
        window.location.reload();
      } catch {
        console.log(validTeacherSignupData);
        window.alert("실패");
      }
    }
  }, [signupData]);

  const submitSecondStudentSignup = useCallback(async () => {
    const { pw } = signupData;
    const { grade, number, room } = signupStudentInfo;
    const validStudentSignupData: SignupStudent = {
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
      console.log(validStudentSignupData);

      window.alert("실패");
    }
  }, [signupData]);

  return {
    role,
    setRole,
    section,
    setSection,
    signupData,
    signupStudentInfo,
    onChangeSignupData,
    submitFirstSignup,
    submitSecondStudentSignup,
    onChangeSignupStudentInfoData,
  };
};
