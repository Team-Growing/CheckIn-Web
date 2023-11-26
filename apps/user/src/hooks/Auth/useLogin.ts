import { useRouter } from "next/router";
import { FormEvent, useRef } from "react";
import { sha512 } from "js-sha512";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constant/Token/Token.constant";
import { usePostLoginMutation } from "@/queries/Auth/query";
import Token from "@/libs/token/Token";
import { CheckinToast } from "@checkin/toast";
import { useQueryClient } from "react-query";
import { CheckInQueryKey } from "@checkin/querykey";

export const useLogin = () => {
  const queryClient = useQueryClient();
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
            router.replace("/");
            queryClient.invalidateQueries(CheckInQueryKey.member.getMy);
            CheckinToast.showSuccess("로그인 성공");
          },
          onError: () => {
            CheckinToast.showError("로그인 실패");
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
