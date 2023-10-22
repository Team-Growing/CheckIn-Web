import { getRem } from "@checkin/util";
import styled from "styled-components";
export const NavItemWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  row-gap: 18px;
`;

export const NavItemBox = styled.div<{ isMatch: boolean }>`
  width: 260px;
  height: 60px;

  display: flex;
  align-items: center;
  padding-left: 57px;
  column-gap: 17px;

  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  font-size: ${getRem(20)};
  background-color: ${({ isMatch }) => (isMatch == true ? "#00C537" : null)};
  color: ${({ isMatch }) => (isMatch == true ? "#ffffff" : "#636363")};
`;

export const NavItemText = styled.p`
  font-size: ${getRem(18)};
  cursor: pointer;
`;

export const NavItemIcon = styled.img`
  width: 24px;
  height: 24px;
`;
