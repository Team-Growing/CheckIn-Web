import React from "react";
import * as S from "./style";
import { ProfileIcon } from "@checkin/icon";
import { Button, Flex } from "@checkin/ui";
import { AbsenseStudentBox } from "./types";

export const AbsenceStudentList = ({
  children,
  grade,
  name,
  number,
  reason,
  room,
}: AbsenseStudentBox) => {
  return (
    <S.AbsenceStudentListContainer>
      <Flex gap={15} align="center">
        <S.AbsenceStudentProfileBox>
          <ProfileIcon />
        </S.AbsenceStudentProfileBox>
        <Flex direction="column" gap={6}>
          <Flex gap={5}>
            <S.AbsensedStudentName>{name}</S.AbsensedStudentName>
            <S.AbsensedStudentInfoText>
              2학년 1반 12번
            </S.AbsensedStudentInfoText>
          </Flex>
          <S.AbsensedReasonText>
            사유 : 몸이 별로 안좋아서 병원 다녀오겠습니다....
          </S.AbsensedReasonText>
        </Flex>
      </Flex>
      <Button type="primary">결강 승인</Button>
    </S.AbsenceStudentListContainer>
  );
};
