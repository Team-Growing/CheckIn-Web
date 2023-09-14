import { useRouter } from "next/router";
import { FormEvent, useRef } from "react";
import { sha512 } from "js-sha512";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constant/Token/Token.constant";
import { usePostLoginMutation } from "@/queries/Auth/Auth.query";
import Token from "../token/Token";

export const useLogin = () => {
  const router = useRouter();

  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const postLoginMutation = usePostLoginMutation();

  const onLogin = (e: FormEvent) => {
    e.preventDefault();

    if (idRef.current && pwRef.current) {
      postLoginMutation.mutate(
        {
          id: idRef.current.value,
          pw: sha512(pwRef.current.value),
        },
        {
          onSuccess: (data) => {
            Token.setToken(ACCESS_TOKEN_KEY, data.data.accessToken);
            Token.setToken(REFRESH_TOKEN_KEY, data.data.refreshToken);
            router.push("/");
          },
        }
      );
    }
  };

  return {
    idRef,
    pwRef,
    onLogin,
  };
};
