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
  color: #828282;
  font-size: 18px;
  font-weight: 500;
`;
