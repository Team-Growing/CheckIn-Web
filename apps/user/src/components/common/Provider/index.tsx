"use client";

import { ProvidersProps } from "./types";
import React from "react";
import { RecoilRoot } from "recoil";
import { CheckinToastContainer } from "@checkin/toast";
import { GlobalStyle } from "@checkin/styled-theme";
import { Suspensive, SuspensiveProvider } from "@suspensive/react";

const Providers = ({ children }: ProvidersProps) => {
  const suspensive = new Suspensive({
    defaultOptions: {
      suspense: {
        fallback: <span>Loading...</span>,
      },
    },
  });
  return (
    <SuspensiveProvider value={suspensive}>
      <RecoilRoot>
        <GlobalStyle />
        <CheckinToastContainer autoClose={4000} limit={4} />
        {children}
      </RecoilRoot>
    </SuspensiveProvider>
  );
};
export default Providers;
