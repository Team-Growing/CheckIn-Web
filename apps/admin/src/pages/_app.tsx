import type { AppProps } from "next/app";
import "../styles/reset.css";
import "../styles/globalStyle.css";
import Providers from "@/components/common/Provider";
import Layout from "@/components/common/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers pageProps={pageProps}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}
