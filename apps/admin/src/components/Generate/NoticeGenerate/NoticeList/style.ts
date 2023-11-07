import { getRem } from "@checkin/util";
import styled from "styled-components";

export const NoticeListContainer = styled.div`
  width: 100%;

  margin-top: 50px;

  display: flex;
  flex-direction: column;

  row-gap: 25px;
`;

export const NoticeWrap = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 54px 0 54px;
  align-items: center;

  background-color: #ffffff;

  width: 100%;
  height: 64px;
`;

export const NoticeText = styled.p`
  width: 70%;
  color: #828282;
  font-size: ${getRem(18)};
  font-weight: 500;
`;

export const NoticeCreatedAt = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
`;
