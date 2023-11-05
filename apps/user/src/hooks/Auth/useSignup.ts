import { ChangeEvent, useCallback, useState } from "react";
import { sha512 } from "js-sha512";
import AuthRepositoryImpl from "../../repositories/AuthRepository/AuthRepositoryImpl";
import { StudentInfoType, StudentSignupType } from "@checkin/types";
import { patternCheck } from "@checkin/util";
import { CheckinToast } from "@checkin/toast";

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

  const onChangeSignupData = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeSignupStudentInfoData = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setStudentInfoData((prev) => ({ ...prev, [name]: value }));
  };

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

  const submitSecondSignup = async () => {
    const { pw } = signupData;
    const { grade, number, room } = studentInfoData;

    if (grade > 3 || room > 4 || number > 20) {
      CheckinToast.showInfo("올바른 학급정보, 기수를 입력해주세요");
      return;
    }

    const validStudentSignupData = {
      ...signupData,
      pw: sha512(pw),
      studentInfo: {
        grade: Number(grade),
        room: Number(room),
        number: Number(number),
      },
    };
    try {
      await AuthRepositoryImpl.signupStudent(validStudentSignupData);
      window.alert("회원가입에 성공했습니다.(관리자 승인을 기다려주세요!)");
      window.location.reload();
    } catch {
      window.alert("실패");
    }
  };

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
