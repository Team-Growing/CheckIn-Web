"use client";

import { ProvidersProps } from "./types";
import React, { useState } from "react";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { CheckinToastContainer } from "@checkin/toast";
import { GlobalStyle } from "@checkin/styled-theme";
import { captureException } from "@sentry/nextjs";

const Providers = ({ children }: ProvidersProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            retryOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            staleTime: 1000,
            onError: (error) => {
              captureException(error);
            },
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle />
        <CheckinToastContainer autoClose={4000} limit={4} />
        {children}
      </RecoilRoot>
    </QueryClientProvider>
  );
};
export default Providers;
