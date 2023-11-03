import { getRem } from "@checkin/util";
import styled from "styled-components";

export const EnrolLectureFormContainer = styled.form`
  width: 75%;
  height: 371px;

  row-gap: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
`;

export const EnrolLectureFormText = styled.label`
  font-size: ${getRem(20)};
`;

export const EnrolLectureInput = styled.input`
  width: 90%;
  height: 100px;

  padding-left: 30px;
  border: none;
  outline: none;

  border: 2px solid #cdd0dc;
  background: #fff;
  font-size: ${getRem(32)};
`;
