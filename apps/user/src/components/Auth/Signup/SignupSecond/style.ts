import Image from "next/image";
import styled from "styled-components";

export const SignupSecondInputContainer = styled.div`
  width: 100%;
  display: flex;
  column-gap: 25px;
  margin-top: 34px;
`;

export const SigupSecondInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const SignupSecondInput = styled.input`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  background: #e1e1e1;
  border: none;
  outline: none;
  padding-left: 10px;
  font-size: 16px;
`;

export const SignupRequireText = styled.label`
  color: #636363;
  font-size: 14px;
  span {
    color: #008325;
  }
`;

export const SignupIntroText = styled.p`
  color: #828282;
  font-size: 16px;
  margin-left: 35px;
  margin-top: 50px;
`;

export const SignupImage = styled(Image)``;

export const SignupSubmitBtn = styled.button`
  width: 350px;
  height: 50px;
  border-radius: 50px;
  background: #00c537;
  color: #ffffff;
  border: none;
`;

export const SignupSecondPrevBtn = styled.button`
  width: 138px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  column-gap: 10px;

  border-radius: 10px;
  border: 2px solid #636363ff;
  color: #636363ff;
  font-size: 20px;
`;
