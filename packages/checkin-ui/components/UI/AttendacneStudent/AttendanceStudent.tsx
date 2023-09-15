import { Flex } from "../../Layout/Flex/Flex";
import { Button } from "../Button/Button";
import * as S from "./style";
import { ProfileIcon } from "@checkin/icon";

export const AttendanceStudent = () => {
  return (
    <S.AttendanceStudentContainer>
      <S.AttendanceStudentProfileBox>
        <ProfileIcon />
      </S.AttendanceStudentProfileBox>
      <Flex direction="column" align="center">
        <S.AttendanceStudentName>백승하</S.AttendanceStudentName>
        <S.AttendanceStudentGrade>2학년 4반 2번</S.AttendanceStudentGrade>
      </Flex>
      <Button type="unSelect">출석 취소</Button>
    </S.AttendanceStudentContainer>
  );
};
