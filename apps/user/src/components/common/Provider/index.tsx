"use client";

import { ProvidersProps } from "./types";
import React from "react";
import { RecoilRoot } from "recoil";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { CheckinToastContainer } from "@checkin/toast";
import { GlobalStyle } from "@checkin/styled-theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: 1000,
    },
  },
});

const Providers = ({ children, pageProps }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <GlobalStyle />
          <CheckinToastContainer autoClose={4000} limit={4} />
          {children}
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
};
export default Providers;
