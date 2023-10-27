import { useRouter } from "next/router";
import { FormEvent, useRef } from "react";
import { sha512 } from "js-sha512";

import { CheckinToast } from "@checkin/toast";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constant/Token/Token.constant";
import Token from "@/libs/token/Token";
import { usePostLoginMutation } from "@/queries/Auth/query";
import { usePoseInfoAtomStateStore } from "@/store/lectureId";
import { useGetMyLectures } from "@/queries/Lectures/query";

export const useLogin = () => {
  const router = useRouter();
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const setLecureId = usePoseInfoAtomStateStore();
  const postLoginMutation = usePostLoginMutation();

  // const { datas } = useGetMyLectures();

  const onLogin = (e: FormEvent) => {
    e.preventDefault();

    if (idRef.current && pwRef.current) {
      postLoginMutation.mutate(
        {
          id: idRef.current.value,
          pw: sha512(pwRef.current.value),
        },
        {
          onSuccess: ({ data }) => {
            Token.setToken(ACCESS_TOKEN_KEY, data.accessToken);
            Token.setToken(REFRESH_TOKEN_KEY, data.refreshToken);
            router.push("/");
            CheckinToast.showSuccess("로그인 성공");
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
