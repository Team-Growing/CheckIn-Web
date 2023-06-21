import { ProvidersProps } from "./types";

import React from "react";
import { RecoilRoot } from "recoil";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

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
          {children}
          {/* <ThemeProviderContainer>{children}</ThemeProviderContainer> */}
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default Providers;
