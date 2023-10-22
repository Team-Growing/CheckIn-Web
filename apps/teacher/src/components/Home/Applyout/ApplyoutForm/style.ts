import { getRem } from "@checkin/util";
import styled from "styled-components";

export const ApplyoutFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  row-gap: 3vh;
  margin-top: 24px;
`;

export const ApplyoutFormInputWrap = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 5px;
`;

export const ApplyoutRequireText = styled.label`
  color: #636363;
  font-size: ${getRem(14)};
  span {
    color: #008325;
  }
`;
