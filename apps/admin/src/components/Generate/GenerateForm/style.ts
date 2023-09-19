import styled from "styled-components";

export const SuggestionFormContainer = styled.form`
  display: flex;
  flex-direction: column;

  row-gap: 34px;

  width: 100%;
  height: auto;

  padding: 46px 39px 43px;
  margin-top: 23px;

  background-color: #fff;
`;

export const SelectDateBox = styled.div<{ isSelect: boolean }>`
  width: 100px;
  height: 27px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50px;
  background: #f2f2f2;

  font-size: 14px;
  cursor: pointer;

  background-color: ${({ isSelect }) => (isSelect ? "#00c537" : "#F2F2F2")};
  color: ${({ isSelect }) => (isSelect ? "#fff" : "#000")};
  &:hover {
    background-color: #00c537;
    color: #f2f2f2;
  }
`;
