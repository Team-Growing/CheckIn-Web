import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { CheckInTheme } from "./CheckInTheme";

interface Props {
  children: ReactNode;
}

export const CheckInThemeProvider = ({ children }: Props) => {
  return <ThemeProvider theme={CheckInTheme}>{children}</ThemeProvider>;
};
