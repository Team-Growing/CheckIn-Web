import AbsenceRepositoryImpl from "@/repositories/AbsenceRepository/AbsenceRepositoryImpl";
import { CheckInQueryKey } from "@checkin/querykey";
import { AbsencesResponse } from "@checkin/types";
import { AxiosError } from "axios";
import { UseQueryOptions, useMutation, useQuery } from "react-query";

export const useApplyAbsenceMutation = () => {
  const mutation = useMutation(AbsenceRepositoryImpl.applyAbsence);
  return mutation;
};

export const useGetMyAbsenceQuery = (
  options?: UseQueryOptions<
    AbsencesResponse,
    AxiosError,
    AbsencesResponse,
    "absence/myAbsence"
  >
) =>
  useQuery("absence/myAbsence", () => AbsenceRepositoryImpl.getMyAbsence(), {
    ...options,
    cacheTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
  });
