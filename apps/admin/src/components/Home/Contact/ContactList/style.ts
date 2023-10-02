import styled from "styled-components";

export const ContactListContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const ContactListTitle = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  z-index: 3;
  background-color: #fff;
  border-bottom: 1px solid #cdd0dc;

  p {
    font-size: 16px;
    color: #6c7072;
    font-weight: 400;
  }
`;

export const ContactListText = styled.div`
  height: 50px;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 1px solid #cdd0dc;

  p {
    color: #202325;
    font-size: 16px;
    font-weight: 400;
  }

  &:hover {
    background-color: #f2f2f2f2;
  }
`;
