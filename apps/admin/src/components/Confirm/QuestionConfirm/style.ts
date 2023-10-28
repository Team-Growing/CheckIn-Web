import { CheckInColor } from "@checkin/styled-theme";
import styled from "styled-components";

export const ConfirmListContainer = styled.div``;

export const ConfirmListHeader = styled.div`
  display: flex;
  align-items: center;

  height: 50px;
  border-bottom: 3px solid #636363;
`;

export const ConfirmTitle = styled.div``;

export const ConfirmListItemContaienr = styled.div`
  display: flex;
  align-items: center;

  height: 50px;

  cursor: pointer;
  border-bottom: 1px solid #d2d2d2;

  background-color: ${CheckInColor.Background.Lightest};
  &:hover {
    background-color: ${CheckInColor.Background.Lightbase};
  }
`;

export const ConfirmListItem = styled.div`
  width: 10%;
`;
