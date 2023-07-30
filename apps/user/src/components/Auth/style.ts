import styled from "styled-components";
import BackgroundImage from "../../assets/Image/Background.svg";

export const AuthBackGround = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${BackgroundImage.src});
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
  min-width: 583px;
  max-width: 583px;
  height: 100%;
  position: relative;
`;

export const AuthOppositePartWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 7px;
  margin-right: auto;
`;

export const AuthOppositePartText = styled.p`
  color: #636363;
  font-size: 14px;
`;

export const AuthOppositePartButton = styled.button`
  font-size: 14px;
  color: #00c537;
  background: none;
  border: 0px;
  cursor: pointer;
`;
