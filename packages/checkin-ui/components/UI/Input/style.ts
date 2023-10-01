import styled, { CSSObject } from "styled-components";

export const InputContainer = styled.input<{ customStyle?: CSSObject }>`
  width: min-content;
  height: 40px;

  font-size: 16px;

  padding-left: 11px;
  color: #000;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 0px 0px 1px #cdd1dc;
  border: none;
  outline: none;

  ::placeholder {
    color: #c1c7de;
  }

  ${({ customStyle }) => customStyle}
`;

export const InputInfoText = styled.label`
  color: #636363;
  font-size: 20px;
  span {
    color: #fb2047;
  }
`;

export const InputIntroTextStyle = styled.label`
  font-size: 16px;
  color: #737992;
`;

export const AuthInputStyle = styled.input<{ customStyle?: CSSObject }>`
  width: 100%;
  height: 40px;

  border-radius: 5px;
  background-color: #e1e1e1;
  border: none;
  outline: none;

  padding-left: 10px;

  ${({ customStyle }) => customStyle}
`;
