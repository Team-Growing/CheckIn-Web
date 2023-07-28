import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import React from "react";
import { darkTheme, lightTheme } from "./CheckInTheme";

interface Props {
  children: ReactNode;
  mode: "LIGHT" | "DARK";
}

export const CheckInThemeProvider = ({ children, mode }: Props) => {
  return (
    <ThemeProvider theme={mode === "LIGHT" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};
