import { useState } from "react";
import RegistList from "./RegistList";
import * as S from "./style";
import { Button, ButtonWrapper, SectionHeader } from "@checkin/ui";

const Register = () => {
  const [grade, setGrade] = useState(1);
  return (
    <S.RegisterContainer>
      <SectionHeader
        title="방과후 수강신청"
        subTitle="Apply for after-school classes"
      />
      <ButtonWrapper>
        <Button
          type="primary"
          onClick={() => setGrade(1)}
          isSelect={grade == 1 ? false : true}
          customStyle={{ width: "138px", fontSize: "20px" }}
        >
          1학년
        </Button>
        <Button
          type="primary"
          onClick={() => setGrade(2)}
          isSelect={grade == 2 ? false : true}
          customStyle={{ width: "138px", fontSize: "20px" }}
        >
          2학년
        </Button>
      </ButtonWrapper>
      <RegistList grade={grade} />
    </S.RegisterContainer>
  );
};

export default Register;
