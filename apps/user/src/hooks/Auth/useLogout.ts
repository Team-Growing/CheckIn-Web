import Token from "@/libs/token/Token";
import { useRouter } from "next/navigation";

const useLogout = () => {
  const router = useRouter();

  const onLogout = () => {
    Token.clearToken();
    router.replace("/sign");
  };

  return { onLogout };
};

export default useLogout;
