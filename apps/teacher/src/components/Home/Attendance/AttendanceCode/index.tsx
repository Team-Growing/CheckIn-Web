import React from "react";
import {
  EnrolLectureCodeText,
  EnrolLectureForm,
  EnrolLectureFormContainer,
  EnrolLectureFormText,
  EnrolLecutureTextContainer,
} from "./style";
import { Button } from "@checkin/ui";
import {
  useChangeCodeMutation,
  useGetCodeQuery,
} from "@/queries/AttendanceCode/query";
import { CheckinToast } from "@checkin/toast";
import { useQueryClient } from "react-query";
import { CheckInQueryKey } from "@checkin/querykey";

interface Props {
  lectureId: number;
}

const AttendanceCode = ({ lectureId }: Props) => {
  const { data } = useGetCodeQuery(lectureId);
  const queryClient = useQueryClient();
  const onClickChangeHandler = () => {};
  const changeCodeMutation = useChangeCodeMutation();
  return (
    <>
      <EnrolLectureFormContainer>
        <EnrolLectureForm>
          <EnrolLecutureTextContainer>
            <EnrolLectureFormText>출석 코드</EnrolLectureFormText>
            <EnrolLectureCodeText>{data?.data.code}</EnrolLectureCodeText>
          </EnrolLecutureTextContainer>
        </EnrolLectureForm>
        <Button
          customStyle={{ width: "40%" }}
          type="primary"
          onClick={() =>
            changeCodeMutation.mutate(
              { lectureId },
              {
                onSuccess: () => {
                  CheckinToast.showSuccess("변경");
                  queryClient.invalidateQueries(
                    CheckInQueryKey.attendance.getAttendanceCode(lectureId)
                  );
                },
              }
            )
          }
        >
          출석코드 변경
        </Button>
      </EnrolLectureFormContainer>
    </>
  );
};

export default AttendanceCode;
