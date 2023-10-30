import styled from "styled-components";
import Image from "next/image";

export const AttendCardWrap = styled.div`
  width: 12.5rem;
  height: 15.625rem;
  background-color: white;
  border-radius: 0.625rem;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AttendProfileImg = styled(Image)`
  width: 5rem;
  height: 5rem;
`;

export const Test = styled.button``;

export const AttendName = styled.p`
  color: black;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
`;

export const AttendNumber = styled.p`
  color: black;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const AttendInfoContainer = styled.div`
  display: flex;
  height: 13.625rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
