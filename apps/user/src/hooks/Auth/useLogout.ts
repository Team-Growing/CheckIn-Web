import { useRouter } from "next/router";
import Token from "../token/Token";

const useLogout = () => {
  const router = useRouter();

  const onLogout = () => {
    Token.clearToken();
    router.push("/login");
  };

  return { onLogout };
};

export default useLogout;
