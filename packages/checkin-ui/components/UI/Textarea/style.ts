import styled, { CSSObject } from "styled-components";

export const TextareaStyle = styled.textarea<{ customStyle?: CSSObject }>`
  width: 325px;
  height: 77px;

  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 0px 0px 1px #cdd1dc;
  border: none;
  outline: none;
  padding: 11px 8px;
  ${({ customStyle }) => customStyle}
  ::placeholder {
    color: #c1c7de;
  }
`;
