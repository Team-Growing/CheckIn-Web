import { styled } from "styled-components";

export const NavItemBox = styled.div`
  width: 100%;
  height: 96px;

  display: flex;
  flex-direction: column;
  padding-left: 76px;
  row-gap: 10px;
`;

export const NavItemText = styled.p`
  font-size: 18px;

  cursor: pointer;
`;

export const NavUserBox = styled.div`
  min-width: 220px;
  max-width: 220px;
  height: 90px;

  display: flex;
  row-gap: 19px;
`;
