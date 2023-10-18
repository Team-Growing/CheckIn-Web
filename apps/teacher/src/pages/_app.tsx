import type { AppProps } from "next/app";
import "../styles/reset.css";
import "../styles/globalStyle.css";
import Layout from "@/components/common/Layout";
import Providers from "@/components/common/Provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers pageProps={pageProps}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}
