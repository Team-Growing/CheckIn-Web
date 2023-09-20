import LectureRepositoryImpl from "@/repositories/LectureRepository/LectureRepositoryImpl";
import { LectureResponse, LecturesResponse } from "@checkin/types";
import { AxiosError } from "axios";
import { UseQueryOptions, useQuery } from "react-query";

export const useGetTodayLectures = (
  options?: UseQueryOptions<
    LecturesResponse,
    AxiosError,
    LecturesResponse,
    "lectures/todayLectures"
  >
) =>
  useQuery(
    "lectures/todayLectures",
    () => LectureRepositoryImpl.getTodayLecture(),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );
