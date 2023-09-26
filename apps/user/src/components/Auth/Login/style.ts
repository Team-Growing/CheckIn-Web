import styled from "styled-components";
import Image from "next/image";
import { AuthPartFade } from "../style";

export const LoginContainer = styled.form`
  width: 100%;
  height: 100%;
  animation: ${AuthPartFade} 1s;
`;

export const AuthContainer = styled.div`
  width: 1150px;
  height: 700px;
  border-radius: 10px;
  display: flex;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.9);
`;

export const AuthPanelWrap = styled.div`
  min-width: 644px;
  max-width: 644px;
  height: 100%;
  position: relative;
`;

export const AuthPanel = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AuthWrapImage = styled(Image)`
  width: 25px;
  height: 25px;
`;

export const AuthTopWrap = styled.div`
  width: 100%;
  min-height: min-content;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const AuthHeading = styled.h1`
  color: #000;
  font-size: 32px;
  font-weight: 600;
`;

export const AuthSubHeading = styled.h2`
  color: #828282;
  font-size: 16px;
  font-weight: 500;
`;

export const AuthUserIcon = styled(Image)`
  width: 16px;
  height: 16px;
`;

export const AuthInputWrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  row-gap: 20px;
`;

export const AuthText = styled.label`
  font-size: 20px;
`;

export const AuthFlex = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  margin-top: 10px;
`;

export const AuthInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 20px;
  outline: none;
  border: none;
  background: none;
  border-bottom: 1px solid #c7c7c7;
  &:focus {
    border-bottom: 1px solid #4ab940;
  }
`;

export const AuthSubmitBtn = styled.button`
  width: 100%;
  height: 50px;
  background-color: #00c537;
  color: #ffffff;
  border: none;
  border-radius: 50px;
  margin-top: 50px;
`;

export const AuthCheckText = styled.p`
  color: #5f5f5f;
  font-size: 16px;
  display: flex;
  justify-content: flex-end;
  margin-top: 14px;
  cursor: pointer;
`;

export const AuthOppositePartButton = styled.button`
  font-size: 14px;
  color: #00c537;
  background: none;
  border: 0px;
  cursor: pointer;
`;

export const AuthOppositePartText = styled.p`
  color: #636363;
  font-size: 14px;
`;

export const AuthOppositePartWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 7px;
  margin-right: auto;
`;
