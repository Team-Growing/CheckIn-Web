import RegistList from "./RegistList/item";
import * as S from "./style";
import { Button, ButtonWrapper, SectionHeader } from "@checkin/ui";

const Register = () => {
  return (
    <S.RegisterContainer>
      <SectionHeader
        title="방과후 수강신청"
        subTitle="Apply for after-school classes"
      />
      <ButtonWrapper>
        <Button type="primary" style={{ width: "138px", fontSize: "20px" }}>
          1학년
        </Button>
        <Button type="unSelect" style={{ width: "138px", fontSize: "20px" }}>
          2학년
        </Button>
      </ButtonWrapper>
      <RegistList />
    </S.RegisterContainer>
  );
};

export default Register;
