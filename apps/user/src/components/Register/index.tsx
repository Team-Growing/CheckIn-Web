import Item from "./item/item";
import * as S from "./style";
import { SectionHeader } from "@checkin/ui";
const Register = () => {
  return (
    <S.RegisterContainer>
      <SectionHeader
        title="방과후 수강신청"
        subTitle="Apply for after-school classes"
      />
    </S.RegisterContainer>
  );
};

export default Register;
