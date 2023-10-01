import React from "react";
import * as S from "./style";
import { SectionHeader, Select } from "@checkin/ui";
import styled from "styled-components";

const SMS = () => {
  const onChange = () => {};
  return (
    <S.CheckAttendanceContainer>
      <SectionHeader
        title="방과후 출석확인"
        subTitle="after-school attendance check"
      />
      <Select
        name="gd"
        items={["방과후 이름"]}
        onChange={onChange}
        value="방과후 이름"
        customStyle={{ marginTop: "26px" }}
      />
      <Box></Box>
    </S.CheckAttendanceContainer>
  );
};

export default SMS;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 12px;
`;
