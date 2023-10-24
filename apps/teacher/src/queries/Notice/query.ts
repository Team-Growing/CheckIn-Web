import NoticeRepositoryImpl from "@/repositories/NoticeRepository/NoticeRepositoryImpl";
import { useQuery } from "react-query";

export const useGetActiveNoticeQuery = () =>
  useQuery(
    "notice/activeNotice",
    () => NoticeRepositoryImpl.getActiveNotice(),
    {
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
    }
  );
