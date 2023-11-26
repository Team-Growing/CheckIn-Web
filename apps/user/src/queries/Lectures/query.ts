import LectureRepositoryImpl from "@/repositories/LectureRepository/LectureRepositoryImpl";
import { CheckInQueryKey } from "@checkin/querykey";
import { LecturesResponse } from "@checkin/types";
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

export const useGetMyLectures = (
  options?: UseQueryOptions<
    LecturesResponse,
    AxiosError,
    LecturesResponse,
    "lectures/myLectures"
  >
) =>
  useQuery("lectures/myLectures", () => LectureRepositoryImpl.getMyLectures(), {
    ...options,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });

export const useGetEnrolmentLecturesQuery = (
  grade: number,
  options?: UseQueryOptions<
    LecturesResponse,
    AxiosError,
    LecturesResponse,
    ["lectures/getEnrolmentLectures", number]
  >
) =>
  useQuery(
    ["lectures/getEnrolmentLectures", grade],
    () => LectureRepositoryImpl.getEnrolmentLectures(grade),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetTodayMyLecturesQuery = () =>
  useQuery(
    CheckInQueryKey.lecture.getTodayMyLectures,
    () => LectureRepositoryImpl.getTodayMyLectures(),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );
