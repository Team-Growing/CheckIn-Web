import styled from "styled-components";

export const ConfirmContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  row-gap: 32px;

  padding: 64px 104px;

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }

  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }

  ul.pagination li a {
    text-decoration: none;
    color: #00c537;
    font-size: 1rem;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: #00c537;
  }

  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: blue;
  }

  .page-selection {
    width: 48px;
    height: 30px;
    color: #00c537;
  }
`;

export const ConfirmTopWrap = styled.div``;

export const ConfirmLengthText = styled.p`
  font-size: 20px;
  font-weight: 500;

  span {
    color: #00c537;
    font-weight: 700;
  }
`;
