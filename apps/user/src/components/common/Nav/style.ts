import styled from "styled-components";

export const NavContainer = styled.div`
  width: 300px;
  height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 67px;
  padding-bottom: 52px;
`;

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
  width: 81px;
  height: 41px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const NavUserName = styled.p`
  font-size: 16px;
`;

export const NavUserGrade = styled.p`
  font-size: 14px;
`;

export const NavAuthBox = styled.div`
  display: flex;
`;

export const NavLoginText = styled.p`
  & + & {
    border-left: 3px solid #adadad;
    padding-left: 8px;
    margin-left: 8px;
  }
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.05em;
  color: #6d6d6d;
  cursor: pointer;
  height: 28px;
`;
