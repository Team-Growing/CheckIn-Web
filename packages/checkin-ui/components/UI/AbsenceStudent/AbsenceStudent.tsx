import * as S from "./style";
import { CheckAbsenseIcon, ProfileIcon } from "@checkin/icon";
import { AbsenseStudentBox, CheckAbsenseProps } from "./types";
import { dataTransform } from "@checkin/util";
import { Flex } from "../../Layout/Flex/Flex";

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
        <ProfileIcon />
        <Flex direction="column" gap={6}>
          <Flex gap={5}>
            <S.AbsensedStudentName>{name}</S.AbsensedStudentName>
            <S.AbsensedStudentInfoText>
              {dataTransform.schoolInfoTransform(
                grade || 0,
                room || 0,
                number || 0
              )}
            </S.AbsensedStudentInfoText>
          </Flex>
          <S.AbsensedReasonText>{`사유 : ${reason}`}</S.AbsensedReasonText>
        </Flex>
      </Flex>
      {children}
    </S.AbsenceStudentListContainer>
  );
};

export const CheckMyAbsense = ({
  grade,
  isCheck,
  name,
  number,
  reason,
  room,
}: CheckAbsenseProps) => {
  return (
    <S.CheckMyAbsenseBox>
      <Flex gap={15} align="center">
        <S.AbsenceStudentProfileBox>
          <ProfileIcon />
        </S.AbsenceStudentProfileBox>
        <Flex direction="column" gap={6}>
          <Flex gap={5}>
            <S.AbsensedStudentName>{name}</S.AbsensedStudentName>
            <S.AbsensedStudentInfoText>
              {dataTransform.schoolInfoTransform(grade, room, number)}
            </S.AbsensedStudentInfoText>
          </Flex>
          <S.AbsensedReasonText>{`사유 : ${reason}`}</S.AbsensedReasonText>
        </Flex>
      </Flex>
      <CheckAbsenseIcon isCheck={isCheck} />
    </S.CheckMyAbsenseBox>
  );
};
