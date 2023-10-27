import AttendanceRepositoryImpl from "@/repositories/AttendanceRepository/AttendanceRepositoryImpl";
import { useQuery, useMutation } from "react-query";

export const useGetCodeQuery = () =>
  useQuery(
    "/attendance/code/9",
    () => AttendanceRepositoryImpl.getAttendanceCode(),
    {
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
    }
  );

export const useGetAttendantsQuery = () =>
  useQuery(
    "/attendance/9/attendants",
    () => AttendanceRepositoryImpl.getAttendantsCode(),
    {
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
    }
  );
export const useChangeCodeMutation = () => {
  const mutation = useMutation(AttendanceRepositoryImpl.getChangeCode);

  return mutation;
};

export const useGetAttendanceMutation = () => {
  const mutation = useMutation(AttendanceRepositoryImpl.getAttendanceCode);

  return mutation;
};

