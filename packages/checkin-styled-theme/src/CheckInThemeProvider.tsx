import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { CheckInTheme } from "./CheckInTheme";
import GlobalStyle from "./GlobalStyle";

interface Props {
  children: ReactNode;
}

export const CheckInThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={CheckInTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
