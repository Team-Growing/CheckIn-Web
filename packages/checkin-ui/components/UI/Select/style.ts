import { getRem } from "@checkin/util";
import styled, { CSSObject, css } from "styled-components";

export const SelectContainer = styled.div<{
  close: boolean;
  customStyle?: CSSObject;
}>`
  width: min-content;
  height: 35px;

  display: flex;
  align-items: center;
  padding: 0px 8px;
  justify-content: space-between;

  box-shadow: 0px 2px 4px 0px rgba(5, 16, 55, 0.06),
    0px 0px 0px 1px #cdd0dc inset;
  border-radius: 6px;
  position: relative;
  column-gap: 15px;
  cursor: pointer;

  ${({ close }) => !close && css``}
  ${({ customStyle }) => customStyle}
`;

export const SelectText = styled.p`
  font-size: ${getRem(14)};
  white-space: nowrap;
  color: #c1c7de;
`;

export const SelectIcon = styled.div<{ close: boolean }>`
  width: 14px;
  height: 14px;
  font-size: ${getRem(14)};
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  transition: all 0.3s ease;

  ${({ close }) =>
    !close &&
    css`
      transform: rotate(180deg);
    `}
`;

export const SelectItemWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 40px;
  left: 0px;

  overflow: hidden;
  background-color: white;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  box-sizing: border-box;
`;

export const SelectItem = styled.div`
  width: 100%;
  height: 35px;

  display: flex;
  align-items: center;

  box-sizing: border-box;
  background-color: white;
  padding: 0px 10px;
  font-size: ${getRem(14)};

  :hover {
    filter: brightness(90%);
  }
`;
