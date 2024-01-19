"use client";

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
            refetchOnWindowFocus: false,
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
