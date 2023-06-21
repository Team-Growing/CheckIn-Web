import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
// import useTheme from "hooks/theme/useTheme";

import React from "react";

interface Props {
  children: ReactNode;
}

const ThemeProviderContainer = ({ children }: Props) => {
  //   const { themeColor } = useTheme();
  //   return <ThemeProvider>{children}</ThemeProvider>;
};

export default ThemeProviderContainer;
