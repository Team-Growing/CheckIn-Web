import styled from "styled-components";

export const MypageFormContainer = styled.div`
  width: 65%;
  height: 200px;

  border-radius: 5px;
  background: #fff;

  margin-top: 17px;
  column-gap: 40px;

  display: flex;
  align-items: center;
  padding-left: 44px;

  input[type="file"] {
    display: none;
  }
`;

export const MypageImageBox = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  row-gap: 9px;

  width: 150px;
  height: 150px;
  border-radius: 10px;
  color: #f2f2f2;
  background-color: #636363;
`;

export const MypageInputContainer = styled.div`
  display: flex;

  column-gap: 30px;
`;
