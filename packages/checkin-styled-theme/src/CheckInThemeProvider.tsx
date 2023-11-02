import { ReactNode } from "react";
import GlobalStyle from "./GlobalStyle";

interface Props {
  children: ReactNode;
}

export const CheckInThemeProvider = ({ children }: Props) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};
