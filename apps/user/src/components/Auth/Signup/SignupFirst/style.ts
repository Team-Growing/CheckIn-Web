import styled from "styled-components";
import { Role } from "../SignupSecond";

export const AuthStudentBox = styled.div<{ role: Role }>`
  width: 177px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid
    ${({ role }) => (role === "student" ? "#00C537" : "#E1E1E1")};
  border-radius: 5px 0px 0px 5px;
`;

export const AuthTeacherBox = styled.div<{ role: Role }>`
  width: 177px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border: 1.5px solid
    ${({ role }) => (role === "teacher" ? "#00C537" : "#E1E1E1")};

  border-radius: 0px 5px 5px 0px;
`;

export const AuthSelectUserWrap = styled.div`
  display: flex;
  margin-top: 22px;
`;

export const SignupInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  margin-top: 44px;
`;

export const SignupInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const SignupInput = styled.input`
  width: 350px;
  height: 40px;
  border-radius: 5px;
  background: #e1e1e1;
  border: none;
  outline: none;
  padding-left: 10px;
`;

export const SignupRequireText = styled.label`
  color: #636363;
  font-size: 14px;
  span {
    color: #008325;
  }
`;

export const SignupSubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 138px;
  height: 50px;

  column-gap: 10px;

  border-radius: 10px;
  background: #00c537;
  color: #fff;
  border: none;
  font-size: 20px;
`;

export const SignupSecondSubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 203px;
  height: 50px;

  column-gap: 10px;

  border-radius: 10px;
  background: #00c537;
  color: #fff;
  border: none;
  font-size: 20px;
`;
