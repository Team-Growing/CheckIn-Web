import AttendanceRepositoryImpl from "@/repositories/AttendanceRepository/AttendanceRepositoryImpl";
import { CheckInQueryKey } from "@checkin/querykey";
import { useQuery } from "react-query";

export const useGetAttendanceListQuery = (lectureId: number) =>
  useQuery(CheckInQueryKey.attendance.getAttendacneList(lectureId), () =>
    AttendanceRepositoryImpl.getAttendanceList(lectureId)
  );
