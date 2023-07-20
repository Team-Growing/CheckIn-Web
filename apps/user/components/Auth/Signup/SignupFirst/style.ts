import { styled } from "styled-components";

export const AuthStudentBox = styled.div`
  width: 177px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid black;
  border-radius: 5px 0px 0px 5px;
`;

export const AuthTeacherBox = styled.div`
  width: 177px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid black;
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
  width: 350px;
  height: 50px;

  border-radius: 50px;
  background: #00c537;
  border: none;
`;
