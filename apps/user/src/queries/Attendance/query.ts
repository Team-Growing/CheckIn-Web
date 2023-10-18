import AttendanceRepositoryImpl from "@/repositories/AttendanceRepository/AttendanceRepositoryImpl";
import { useMutation, useQuery } from "react-query";

export const useAttendanceLectureMutation = () => {
  const mutation = useMutation(AttendanceRepositoryImpl.attendanceLecture);
  return mutation;
};

export const useGetAttendanceListQuery = (lectureId: number) =>
  useQuery(
    "lecture/lectureAttendance",
    () => AttendanceRepositoryImpl.getAttendanceList(lectureId),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );
