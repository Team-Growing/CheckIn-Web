import AuthImg from "../../assets/Image/AuthImg.svg";
import * as S from "./style";
import Login from "./Login";

const Auth = () => {
  return (
    <>
      <S.AuthBackGround>
        <S.AuthContainer>
          <S.AuthPanelWrap>
            <S.AuthPanel width={25} height={25} src={AuthImg.src} alt="" />
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
