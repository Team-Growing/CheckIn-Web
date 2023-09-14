import { useEffect } from "react";
import { useRouter } from "next/router";
import { ACCESS_TOKEN_KEY } from "@/constant/Token/Token.constant";
import { CheckinToast } from "@checkin/toast";
import Token from "../token/Token";

const useTokenCheck = () => {
  const router = useRouter();
  useEffect(() => {
    const checkTokens = () => {
      if (!Token.getToken(ACCESS_TOKEN_KEY)) {
        CheckinToast.showError("토큰이 위조");
        router.push("/sign");
      }
    };
    checkTokens();
  }, []);
};

export default useTokenCheck;
