import { getRem } from "@checkin/util";
import Image from "next/image";
import styled from "styled-components";

type UserRoleType = "teacher" | "student";

export const SignupSecondInputContainer = styled.div`
  margin-top: 34px;
`;

export const SigupSecondInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const SignupSecondInput = styled.input<{ type: UserRoleType }>`
  width: ${({ type }) => (type == "student" ? "100px" : "358px")};
  height: 40px;
  border-radius: 5px;
  background: #e1e1e1;
  border: none;
  outline: none;
  padding-left: 10px;
  font-size: ${getRem(16)};
`;

export const SignupRequireText = styled.label`
  color: #636363;
  font-size: ${getRem(14)};
  span {
    color: #008325;
  }
`;

export const SignupIntroText = styled.p`
  color: #828282;
  font-size: ${getRem(16)};
  margin-left: 35px;
  margin-top: 25px;
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
  font-size: ${getRem(20)};
`;
