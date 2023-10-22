import HomeRepositoryImpl from "@/repositories/HomeRepository/HomeRepositoryImpl";
import { useQuery } from "react-query";

export const useGetCodeQuery = () =>
  useQuery("notice/activeNotice", () => HomeRepositoryImpl.getCode(), {
    cacheTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
  });
