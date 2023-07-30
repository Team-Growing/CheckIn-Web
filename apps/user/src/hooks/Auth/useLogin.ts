import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import AuthRepositoryImpl from "../../repositories/Auth/AuthRepositoryImpl";
import { Login } from "../../types/Auth/Login/Login.type";
import { sha512 } from "js-sha512";

export const useLogin = () => {
  const router = useRouter();

  const [loginData, setIsLoginData] = useState({
    id: "",
    pw: "",
  });

  const onChangeLoginData = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setIsLoginData((prev) => ({ ...prev, [name]: value }));
    },
    [loginData]
  );

  const submitLoginData = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const { id, pw } = loginData;
      const validLoginData: Login = {
        id,
        pw: sha512(pw),
      };
      try {
        await AuthRepositoryImpl.login(validLoginData);
        window.alert("로그인 성공");
        router.push("/");
      } catch {
        window.alert("실패");
      }
    },
    [loginData]
  );

  return {
    loginData,
    onChangeLoginData,
    submitLoginData,
  };
};
