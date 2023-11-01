import { CheckInColor } from "@checkin/styled-theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 64px 104px;

  display: flex;
  flex-direction: column;

  row-gap: 34px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 13px;
`;

export const ItemBox = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 40px;
  padding-right: 40px;

  background-color: ${CheckInColor.Background.Lightest};
`;

export const ProfileBox = styled.div`
  width: 60px;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${CheckInColor.Background.Lightdark};
  border-radius: 100%;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

export const StudentInfo = styled.p`
  color: ${CheckInColor.Main.Base};
  font-size: 20px;
  font-weight: 500;
`;

export const Reason = styled.p`
  color: ${CheckInColor.Text.Base};
  font-size: 20px;
  font-weight: 400;
  letter-spacing: -0.4px;
`;
