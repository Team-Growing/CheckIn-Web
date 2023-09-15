import styled from "styled-components";

export const AttendanceStudentContainer = styled.div`
  width: 200px;
  height: 250px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  row-gap: 12px;

  border-radius: 10px;
  background: #fff;
`;

export const AttendanceStudentProfileBox = styled.div`
  border-radius: 100%;

  width: 80px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #6c7072;
`;

export const AttendanceStudentName = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

export const AttendanceStudentGrade = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
