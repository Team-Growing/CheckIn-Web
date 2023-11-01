import styled, {
  CSSObject,
  FlattenSimpleInterpolation,
  css,
} from "styled-components";
import { ButtonType } from "./types";
import { getRem } from "@checkin/util";

export const ButtonContainer = styled.button<{
  isSelect?: boolean;
  buttonType: ButtonType;
  customStyle?: CSSObject;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: auto;
  height: 47px;

  padding-left: 18px;
  padding-right: 18px;

  column-gap: 10px;

  cursor: pointer;

  border-radius: 6px;
  font-size: ${getRem(16)};

  ${({ customStyle }) => customStyle}
  ${({ buttonType, isSelect }) => {
    if (isSelect) {
      return buttonSelectedStyle[buttonType];
    } else {
      return buttonStyle[buttonType];
    }
  }}
`;

export const ButtonWrapperBox = styled.div<{ customStyle?: CSSObject }>`
  width: auto;
  height: auto;
  ${({ customStyle }) => customStyle}
  display: flex;

  margin-top: 1rem;

  column-gap: 13px;
`;

const buttonStyle: Record<ButtonType, FlattenSimpleInterpolation> = {
  primary: css`
    background-color: #00c537;
    color: #ffffff;
    border: none;
  `,
  secondary: css`
    background-color: #f0f2f6;
    color: #1e202c;
    border: none;
  `,
  outline: css`
    background-color: #ffffff;
    color: #00c537;
    border: 1px solid #00c537;
    :hover {
      background-color: #00c537;
      color: #fff;
    }
  `,
  text: css`
    background-color: #ffffff;
    color: #00c537;
    border: none;
  `,
  unSelect: css`
    border: 2px solid #636363;
    background-color: #f5f5f5;
    color: #636363;
  `,
};

const buttonSelectedStyle: Record<ButtonType, FlattenSimpleInterpolation> = {
  primary: css`
    border: 2px solid #636363;
    background-color: #f5f5f5;
    color: #636363;
  `,
  secondary: css``,
  outline: css``,
  text: css``,
  unSelect: css`
    background-color: #00c537;
    color: #ffffff;
    border: none;
  `,
};
