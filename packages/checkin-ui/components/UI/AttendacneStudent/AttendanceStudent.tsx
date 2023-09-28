import { Flex } from "../../Layout/Flex/Flex";
import * as S from "./style";
import { ProfileIcon } from "@checkin/icon";
import { AttendStudentProps } from "./types";
import { dataTransform } from "@checkin/util";

export const AttendanceStudent = ({
  children,
  grade,
  name,
  number,
  room,
}: AttendStudentProps) => {
  return (
    <S.AttendanceStudentContainer>
      <S.AttendanceStudentProfileBox>
        <ProfileIcon />
      </S.AttendanceStudentProfileBox>
      <Flex direction="column" align="center">
        <S.AttendanceStudentName>{name}</S.AttendanceStudentName>
        <S.AttendanceStudentGrade>
          {dataTransform.schoolInfoTransform(grade, room, number)}
        </S.AttendanceStudentGrade>
      </Flex>
      {children}
    </S.AttendanceStudentContainer>
  );
};
