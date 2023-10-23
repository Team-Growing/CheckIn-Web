import AttendRepositoryImpl from "@/repositories/AttendRepository/AttendRepositoryImpl";
import { useQuery } from "react-query";

export const useGetCodeQuery = () =>
  useQuery("notice/activeNotice", () => AttendRepositoryImpl.getCode(), {
    cacheTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
  });
