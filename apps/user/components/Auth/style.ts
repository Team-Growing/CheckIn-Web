import { styled } from "styled-components";
import BackgroundImage from "../../assets/Background.svg";

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
