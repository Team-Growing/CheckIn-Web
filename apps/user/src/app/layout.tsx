import Providers from "@/components/common/Provider";
import StyledComponentsRegistry from "@/libs/Style/registry";
import type { ReactNode } from "react";
import PageLayout from "@/components/common/Layout";
import "@/styles/font.css";
import "@/styles/reset.css";
import QueryClientProvider from "@/components/common/Provider/QueryClientProvider";

export const metadata = {
  title: "교내 방과후 관리 시스템 | 체크인",
  description: "교내 방과후 관리 시스템 체크인 입니다.",
};

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <QueryClientProvider>
            <Providers>
              <PageLayout>{children}</PageLayout>
            </Providers>
          </QueryClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default Layout;
