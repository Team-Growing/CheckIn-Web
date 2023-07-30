import { useState } from "react";
import AuthImg from "../../assets/Image/AuthImg.svg";
import Login from "./Login";
import Signup from "./Signup";
import * as S from "./Login/style";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <S.AuthBackGround>
        <S.AuthContainer>
          <S.AuthPanelWrap>
            <S.AuthPanel src={AuthImg.src} />
          </S.AuthPanelWrap>
          {isLogin ? (
            <Login setIsLogin={setIsLogin} />
          ) : (
            <Signup setIsLogin={setIsLogin} />
          )}
        </S.AuthContainer>
      </S.AuthBackGround>
    </>
  );
};

export default Auth;
