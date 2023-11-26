import Token from "@/libs/Token/Token";
import { useRouter } from "next/router";

const useLogout = () => {
  const router = useRouter();

  const onLogout = () => {
    Token.clearToken();
    router.replace("/sign");
  };

  return { onLogout };
};

export default useLogout;
