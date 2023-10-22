import { getRem } from "@checkin/util";
import styled from "styled-components";

export const SectionHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  height: auto;
`;

export const SectionHeaderImage = styled.img`
  margin-left: -8px;
`;

export const SectionHeaderTitle = styled.p`
  margin-top: 10px;
  color: #0b1e02;
  font-size: ${getRem(24)};
  font-weight: 600;
`;

export const SectionHeaderSubTitle = styled.p`
  margin-top: 3px;
  color: #636363;
  font-size: ${getRem(20)};
  font-weight: 300;
`;
