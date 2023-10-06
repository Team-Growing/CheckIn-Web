import { getRem } from "@checkin/util";
import styled from "styled-components";

export const CMSContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 69px;
`;

export const CMSTopWrap = styled.div`
  width: 100%;
  padding-left: 104px;
`;

export const CMSListContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;

  padding-left: 104px;
  column-gap: 26px;
`;

export const CmsStatusBox = styled.div`
  display: flex;
  align-items: center;

  padding-left: 24px;

  column-gap: 15px;

  width: 330px;
  height: 60px;

  border-radius: 10px;
  background: #fff;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.05);

  p {
    color: #000;
    font-family: Pretendard;
    font-size: ${getRem(20)};
    font-style: normal;
    font-weight: 400;
  }
`;

export const CmsStatusColorBox = styled.div<{
  status: string;
}>`
  width: 18px;
  height: 18px;

  border-radius: 100%;

  background-color: ${({ status }) => status};
`;
