import { CheckInColor } from "@checkin/styled-theme";
import styled from "styled-components";

export const Container = styled.div`
  min-width: 1000px;
  max-width: 1000px;
  height: 90%;

  background-color: ${CheckInColor.Background.Lightest};
`;

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 150px;

  row-gap: 10px;

  padding: 32px 45px;
  border-bottom: 5px solid #5b5b5b;
`;

export const HeaderTitle = styled.h1`
  color: ${CheckInColor.Text.Darkest};

  font-size: 24px;
  font-weight: 600;
`;

export const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;

  height: 52px;

  border-bottom: 1px dashed #5b5b5b;
`;

export const Wrap = styled.div`
  width: 100%;
  height: calc(100% - 150px);

  padding: 31px 45px;
`;

export const Title = styled.h1`
  color: ${CheckInColor.Text.Darkest};

  font-size: 32px;
  font-weight: 500;
`;

export const DayOfWeek = styled.div`
  width: 84px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50px;
  border: 1px solid #000;
`;

export const InfoBox = styled.div`
  width: 100%;

  display: flex;
  column-gap: 28px;

  margin-top: 9px;
`;

export const InfoText = styled.p`
  color: ${CheckInColor.Text.Base};
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
`;

export const ContentSection = styled.p`
  font-size: 16px;
  font-weight: 500;

  color: #1e202c;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 126px;

  padding: 8px 11px;

  color: #c1c7de;

  border-radius: 6px;
  box-shadow: 0px 0px 0px 1px #cdd1dc;
`;
