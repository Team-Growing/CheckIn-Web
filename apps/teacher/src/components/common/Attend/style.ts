import styled from "styled-components";
import Image from "next/image";

export const AttendWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
  position: relative;

  padding: 20rem 20rem 20rem 20rem;
`;

export const AttendTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const AttendIconImg = styled(Image)`
  width: 3.5rem;
  height: 3.5rem;
`;

export const AttendTitle = styled.div`
  color: #0b1e02;
  font-size: 1.5em;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const AttendSubtitle = styled.div`
  color: var(--Gray, #636363);
  font-size: 1.25em;
  font-style: normal;
  font-weight: 300;
  line-height: 2rem; /* 160% */
`;

export const AttendCardContainer = styled.div``;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 12vw;
  justify-content: space-between;
`;
