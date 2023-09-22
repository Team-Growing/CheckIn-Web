import AuthImg from "../../assets/Image/AuthImg.svg";
import * as S from "./style";
import Login from "./Login";

const Auth = () => {
  return (
    <>
      <S.AuthBackGround>
        <S.AuthContainer>
          <S.AuthPanelWrap>
            <S.AuthPanel src={AuthImg.src} />
          </S.AuthPanelWrap>
          <S.AuthWrap>
            <Login />
          </S.AuthWrap>
        </S.AuthContainer>
      </S.AuthBackGround>
    </>
  );
};

export default Auth;
