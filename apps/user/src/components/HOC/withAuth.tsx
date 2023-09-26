import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constant/Token/Token.constant";
import Token from "@/libs/token/Token";
import { isServer } from "@/utils/srr";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const withAuth = (AuthComponent: React.ComponentType) => {
  const AuthCheck = () => {
    const router = useRouter();

    useEffect(() => {
      if (isServer()) {
        const isAuthority =
          Token.getToken(ACCESS_TOKEN_KEY) !== undefined &&
          Token.getToken(REFRESH_TOKEN_KEY) !== undefined;

        if (!isAuthority) {
          router.replace("/sign");
        }
      }
    }, [router]);

    return <AuthComponent />;
  };

  return AuthCheck;
};

export default withAuth;
