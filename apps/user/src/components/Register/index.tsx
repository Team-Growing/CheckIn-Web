import RegistList from "./RegistList";
import * as S from "./style";
import { Button, ButtonWrapper, SectionHeader } from "@checkin/ui";
import { useRouter } from "next/router";

const Register = () => {
  const { query, push } = useRouter();

  return (
    <S.RegisterContainer>
      <SectionHeader
        title="방과후 수강신청"
        subTitle="Apply for after-school classes"
      />
      <ButtonWrapper>
        <Button
          type="primary"
          onClick={() => push("/register/1")}
          isSelect={Number(query.grade) == 1 ? false : true}
          customStyle={{ width: "138px", fontSize: "20px" }}
        >
          1학년
        </Button>
        <Button
          type="primary"
          onClick={() => push("/register/2")}
          isSelect={Number(query.grade) == 2 ? false : true}
          customStyle={{ width: "138px", fontSize: "20px" }}
        >
          2학년
        </Button>
      </ButtonWrapper>
      <RegistList grade={Number(query.grade)} />
    </S.RegisterContainer>
  );
};

export default Register;
