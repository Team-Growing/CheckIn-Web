import NoticeRepositoryImpl from "@/repositories/NoticeRepository/NoticeRepositoryImpl";
import { NoticeResponse } from "@checkin/types";
import { AxiosError } from "axios";
import { UseQueryOptions, useQuery } from "react-query";

export const useGetActiveNoticeQuery = (
  options?: UseQueryOptions<
    NoticeResponse,
    AxiosError,
    NoticeResponse,
    "notice/activeNotice"
  >
) =>
  useQuery(
    "notice/activeNotice",
    () => NoticeRepositoryImpl.getActiveNotice(),
    {
      ...options,
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
    }
  );
