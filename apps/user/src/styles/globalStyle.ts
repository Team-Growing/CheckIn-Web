import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Pretendard-Regular" !important;
 }

 a {
  text-decoration: none;
  color: black;
 }

 body {
   background-color: #F5F5F5;
  }
 `;

export default GlobalStyle;
