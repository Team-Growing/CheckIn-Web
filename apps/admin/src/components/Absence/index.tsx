import React, { ChangeEvent, useEffect, useState } from "react";
import * as S from "./style";
import {
  Button,
  ButtonWrapper,
  DateInput,
  Flex,
  SectionHeader,
} from "@checkin/ui";
import {
  useAllowAbsenceMutation,
  useDenyAbsenceMutation,
  useGetAbsencesQuery,
} from "@/queries/Absence/query";
import { dataTransform, dateTransform } from "@checkin/util";
import { ProfileIcon } from "@checkin/icon";
import { CheckinToast } from "@checkin/toast";
import { useQueryClient } from "react-query";
import { CheckInQueryKey } from "@checkin/querykey";

const Absence = () => {
  const queryClient = useQueryClient();
  const [date, setDate] = useState(dateTransform.hyphen(String(new Date())));
  const { data, refetch } = useGetAbsencesQuery(date);

  const onChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const denyAbsenceMutation = useDenyAbsenceMutation();
  const allowAbsenceMutation = useAllowAbsenceMutation();

  useEffect(() => {
    refetch();
  }, [date]);

  return (
    <S.Container>
      <SectionHeader
        title="결강자 확인"
        subTitle="management of a contractor"
      />
      <DateInput onChange={onChangeDate} value={date} />
      <S.Wrap>
        {data?.data.map((data) => (
          <S.ItemBox key={data.lectureId.value}>
            <Flex gap={30} align="center">
              <Flex gap={20} align="center">
                <S.ProfileBox>
                  <ProfileIcon />
                </S.ProfileBox>

                <S.Name>{data.absentee.name}</S.Name>
              </Flex>
              <S.StudentInfo>
                {dataTransform.schoolInfoTransform(
                  data.absentee.studentInfo.grade,
                  data.absentee.studentInfo.room,
                  data.absentee.studentInfo.number
                )}
              </S.StudentInfo>
              <p>{data.reason}</p>
            </Flex>

            {data.absenceStatus === "ABSENCE_ALLOWED" ? (
              <p>승인 취소</p>
            ) : data.absenceStatus === "ABSENCE_DENIED" ? (
              <p>거절됨</p>
            ) : (
              <ButtonWrapper customStyle={{ height: "60px" }}>
                <Button
                  type="primary"
                  onClick={() =>
                    allowAbsenceMutation.mutate(data.absenceId.value, {
                      onSuccess: () => {
                        CheckinToast.showSuccess(
                          `${data.absentee.name}의 결강 승인`
                        );
                        queryClient.invalidateQueries(
                          CheckInQueryKey.absence.getAll
                        );
                      },
                      onError: () => {
                        CheckinToast.showError("승인 실패 서버에러..");
                      },
                    })
                  }
                >
                  승인
                </Button>
                <Button
                  type="deny"
                  onClick={() =>
                    denyAbsenceMutation.mutate(data.absenceId.value, {
                      onSuccess: () => {
                        CheckinToast.showSuccess(
                          `${data.absentee.name}의 결강 거절`
                        );
                        queryClient.invalidateQueries(
                          CheckInQueryKey.absence.getAll
                        );
                      },
                      onError: () => {
                        CheckinToast.showError("결강 거절 실패 서버에러");
                      },
                    })
                  }
                >
                  거절
                </Button>
              </ButtonWrapper>
            )}
          </S.ItemBox>
        ))}
      </S.Wrap>
    </S.Container>
  );
};

export default Absence;
