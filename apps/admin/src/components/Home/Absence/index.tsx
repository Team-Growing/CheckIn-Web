import {
  AbsenceStudentList,
  Button,
  ButtonWrapper,
  Card,
  CardTitle,
  Flex,
} from "@checkin/ui";
import React from "react";
import { CalendarIcon } from "@checkin/icon";
import {
  useAllowAbsenceMutation,
  useDenyAbsenceMutation,
  useGetAbsencesQuery,
} from "@/queries/Absence/query";
import { dateTransform } from "@checkin/util";
import Link from "next/link";
import { CheckinToast } from "@checkin/toast";

const Absence = () => {
  const day = new Date();
  const { data } = useGetAbsencesQuery(dateTransform.hyphen(String(day)));
  const denyAbsenceMutation = useDenyAbsenceMutation();
  const allowAbsenceMutation = useAllowAbsenceMutation();

  return (
    <Card type="Applyout" customStyle={{ width: "41%" }}>
      <Flex justify="between" align="center">
        <CardTitle>
          <CalendarIcon />
          결강자 승인
        </CardTitle>
        <Link href="/absence/list">더보기</Link>
      </Flex>
      <Flex
        direction="column"
        customStyle={{ height: "100%", overflow: "auto" }}
      >
        {data?.data.length! < 1 ? (
          <div>결강 신청이 없습니다</div>
        ) : (
          data?.data.map((data) => (
            <AbsenceStudentList
              grade={data.absentee?.studentInfo.grade}
              name={data.absentee?.name}
              number={data.absentee?.studentInfo.number}
              room={data.absentee?.studentInfo.room}
              reason={data?.reason}
              key={data.absenceId?.value}
            >
              {data.absenceStatus === "ABSENCE_ALLOWED" ? (
                <>승인됨</>
              ) : data.absenceStatus === "ABSENCE_DENIED" ? (
                <>거절됨</>
              ) : (
                <ButtonWrapper>
                  <Button
                    onClick={() => {
                      allowAbsenceMutation.mutate(data.absenceId.value, {
                        onSuccess: () => {
                          CheckinToast.showSuccess("결강을 승인하셨습니다");
                        },
                        onError: () => {
                          CheckinToast.showError("결강 승인 실패");
                        },
                      });
                    }}
                    type="primary"
                    customStyle={{ width: "65px" }}
                  >
                    승인
                  </Button>
                  <Button
                    onClick={() => {
                      denyAbsenceMutation.mutate(data.absenceId.value, {
                        onSuccess: () => {
                          CheckinToast.showSuccess("결강을 거절하셨습니다");
                        },
                        onError: () => {
                          CheckinToast.showError("결강 거절 실패");
                        },
                      });
                    }}
                    type="deny"
                    customStyle={{ width: "65px" }}
                  >
                    거절
                  </Button>
                </ButtonWrapper>
              )}
            </AbsenceStudentList>
          ))
        )}
      </Flex>
    </Card>
  );
};

export default Absence;
