import AttendanceRepositoryImpl from "@/repositories/AttendanceRepository/AttendanceRepositoryImpl";
import { useQuery } from "react-query";

export const useGetAttendanceListQuery = (lectureId: number) =>
  useQuery(
    "lecture/lectureAttendance",
    () => AttendanceRepositoryImpl.getAttendanceList(lectureId),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );
