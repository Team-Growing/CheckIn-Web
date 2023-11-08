import AttendanceRepositoryImpl from "@/repositories/AttendanceRepository/AttendanceRepositoryImpl";
import { CheckInQueryKey } from "@checkin/querykey";
import { useMutation, useQuery } from "react-query";

export const useGetAttendanceListQuery = (lectureId: number) =>
  useQuery(CheckInQueryKey.attendance.getAttendacneList(lectureId), () =>
    AttendanceRepositoryImpl.getAttendanceList(lectureId)
  );

export const usePostConfirmAttendanceMutation = () => {
  const mutation = useMutation(AttendanceRepositoryImpl.postConfirmAttendance);
  return mutation;
};

export const useDeleteCancelAttendanceMutation = () => {
  const mutation = useMutation(
    AttendanceRepositoryImpl.deleteCancelAttdendance
  );
  return mutation;
};
