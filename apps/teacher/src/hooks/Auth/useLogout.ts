import Token from "@/libs/token/Token";
import { useRouter } from "next/router";
import React from "react";

const useLogout = () => {
  const router = useRouter();

  const onLogout = () => {
    Token.clearToken();
    router.push("/");
  };

  return { onLogout };
};

export default useLogout;
