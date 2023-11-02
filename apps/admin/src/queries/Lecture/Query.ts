import { getLecturesByLectureStatusParam } from "@/repositories/LectureRepository/LectureRepository";
import LectureRepositoryImpl from "@/repositories/LectureRepository/LectureRepositoryImpl";
import { CheckInQueryKey } from "@checkin/querykey";
import { useMutation, useQuery } from "react-query";

export const useCreateLectureMutation = () => {
  const mutation = useMutation(LectureRepositoryImpl.postLecture);
  return mutation;
};

export const useGetLecturesByStatus = ({
  grade,
  status,
}: getLecturesByLectureStatusParam) =>
  useQuery(
    ["lectures/getLectures", status, grade],
    () => LectureRepositoryImpl.getLecturesByLectureStatus({ grade, status }),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const usePatchLectureStatusMutation = () => {
  const mutation = useMutation(LectureRepositoryImpl.patchLectureStatus);
  return mutation;
};

export const useGetTodayLecturesQuery = () =>
  useQuery(
    CheckInQueryKey.lecture.getToday,
    () => LectureRepositoryImpl.getTodayLectures(),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetAllLecturesQuery = (grade: number) =>
  useQuery(
    CheckInQueryKey.lecture.getAll(grade),
    () => LectureRepositoryImpl.getAllLectures(grade),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );
