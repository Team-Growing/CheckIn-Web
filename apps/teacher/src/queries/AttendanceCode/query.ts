import AttendanceRepositoryImpl from "@/repositories/AttendanceRepository/AttendanceRepositoryImpl";
import { useQuery } from "react-query";

export const useGetCodeQuery = () =>
  useQuery(
    "notice/activeNotice",
    () => AttendanceRepositoryImpl.getAttendanceCode(),
    {
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
    }
  );
