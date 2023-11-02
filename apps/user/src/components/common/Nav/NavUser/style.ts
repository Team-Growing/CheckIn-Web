import { getRem } from "@checkin/util";
import styled from "styled-components";

export const NavBottomBox = styled.div`
  width: 100%;
  height: 133px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 14px;
`;

export const NavUserBox = styled.div`
  min-width: 220px;
  max-width: 220px;
  height: 90px;
  display: flex;
  align-items: center;
  padding-left: 18px;
  column-gap: 19px;
  background: #f2f2f2;
  border-radius: 5px;
`;

export const NavUserImageBackground = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: #ffffff;
`;

export const NavUserInfoBox = styled.div`
  width: 90px;
  height: 41px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const NavUserName = styled.p`
  font-size: ${getRem(16)};
`;

export const NavUserGrade = styled.p`
  font-size: ${getRem(14)};
`;

export const NavAuthBox = styled.div`
  display: flex;
  font-size: ${getRem(20)};
`;

export const NavLoginText = styled.p`
  color: #6d6d6d;
  cursor: pointer;
`;
