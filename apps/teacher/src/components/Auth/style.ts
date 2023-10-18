import styled, { keyframes } from "styled-components";
import AuthBackground from "../../assets/Image/AuthBackground.svg";

export const AuthBackGround = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${AuthBackground.src});
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
  min-width: 644px;
  max-width: 644px;
  height: 100%;
  position: relative;
`;

export const AuthPanel = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AuthWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 70px 72px 0 74px;
`;

export const AuthPartFade = keyframes`
  from {
    transform: translate3d(-50px, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;
