import type { AppProps } from "next/app";
import Providers from "@/components/common/Provider";
import Layout from "@/components/common/Layout";
import "@/styles/font.css";
import "@/styles/reset.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Providers pageProps={pageProps}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Providers>
    </>
  );
}
