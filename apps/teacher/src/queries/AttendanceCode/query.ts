import AttendanceRepositoryImpl from "@/repositories/AttendanceRepository/AttendanceRepositoryImpl";
import { useQuery, useMutation } from "react-query";
import { CheckInQueryKey } from "@checkin/querykey";

export const useGetCodeQuery = (lectureId: number) =>
  useQuery(
    CheckInQueryKey.attendance.getAttendanceCode(lectureId),
    () => AttendanceRepositoryImpl.getAttendanceCode(lectureId),
    {
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
    }
  );

export const useGetAttendantsQuery = () =>
  useQuery(
    "/attendance/9/attendants",
    () => AttendanceRepositoryImpl.getAttendants(),
    {
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
    }
  );
export const useChangeCodeMutation = () => {
  const mutation = useMutation(AttendanceRepositoryImpl.getChangeCode);

  return mutation;
};

// export const useGetAttendanceMutation = () => {
//   const mutation = useMutation(AttendanceRepositoryImpl.getAttendanceCode);

//   return mutation;
// };

export const usePostConfirmAttendanceMutation = () => {
  const mutation = useMutation(AttendanceRepositoryImpl.postConfirmAttendance);
  return mutation;
};

export const useAttendanceMutation = () => {
  const mutation = useMutation(AttendanceRepositoryImpl.getAttendance);

  return mutation;
};
