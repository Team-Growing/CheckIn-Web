import { getRem } from "@checkin/util";
import styled from "styled-components";

export const AbsenceStudentListContainer = styled.div`
  height: 90px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 30px;

  padding-left: 17px;
  padding-right: 28px;

  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
`;

export const AbsenceListContainer = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const AbsenceStudentProfileBox = styled.div`
  width: 59.143px;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #dcdcdc;
  border-radius: 100%;
`;

export const AbsensedStudentName = styled.p`
  color: #000;
  font-size: ${getRem(20)};
`;

export const AbsensedStudentInfoText = styled.p`
  color: #00c537;
  font-size: ${getRem(14)};
  margin-top: 5px;
`;

export const AbsensedReasonText = styled.p`
  color: #404446;
  font-size: ${getRem(14)};
`;

export const CheckMyAbsenseBox = styled.div`
  width: 40%;
  height: 90px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;
  padding-left: 17px;
  padding-right: 28px;
`;
