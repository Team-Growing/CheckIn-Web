"use client";

import { captureException } from "@sentry/nextjs";
import React, { useState } from "react";
import { QueryClient } from "react-query";
import type { ReactNode } from "react";
import { QueryClientProvider as CheckInQueryClinetProvider } from "react-query";
interface Props {
  children: ReactNode;
}

const QueryClientProvider = ({ children }: Props) => {
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
    <CheckInQueryClinetProvider client={queryClient}>
      {children}
    </CheckInQueryClinetProvider>
  );
};

export default QueryClientProvider;
