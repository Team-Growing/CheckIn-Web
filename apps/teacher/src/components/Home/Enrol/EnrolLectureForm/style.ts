import styled from "styled-components";

export const EnrolLectureFormContainer = styled.form`
  width: 100%;
  height: 100%;

  row-gap: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
`;

export const EnrolLectureFormText = styled.label`
  font-size: 1.6em;
  font-weight: 600;
`;

export const EnrolLectureCodeText = styled.div`
  padding-top: 10px;
  font-size: 4em;
  font-weight: 500;
`;

export const EnrolLecutureTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EnrolLectureInput = styled.input`
  width: 90%;
  height: 100px;

  padding-left: 30px;
  border: none;
  outline: none;

  border: 2px solid #cdd0dc;
  background: #fff;
  font-size: 24px;
`;

export const EnrolLectureButtonContainer = styled.div`
  display: flex;
  margin-top: 1vh;
  margin-bottom: 1vh;
  column-gap: 10px;
`;