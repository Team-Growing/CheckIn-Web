import Token from "@/libs/Token/Token";
import { useRouter } from "next/router";

const useLogout = () => {
  const router = useRouter();

  const onLogout = () => {
    Token.clearToken();
    router.push("/sign");
  };

  return { onLogout };
};

export default useLogout;
