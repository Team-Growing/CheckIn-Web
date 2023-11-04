import { getRem } from "@checkin/util";
import styled from "styled-components";

export const NoticeContainer = styled.div`
  width: 92.5%;
  height: 6vh;

  display: flex;
  align-items: center;

  position: relative;
  overflow: hidden;
  column-gap: 63px;
  padding-left: 29px;

  border-radius: 5px;
  border: 1px solid #cdd0dc;
  background: #fff;
`;

export const NoticeContent = styled.div`
  width: 70%;
  color: #828282;
  font-size: ${getRem(18)};
  font-weight: 500;
`;
