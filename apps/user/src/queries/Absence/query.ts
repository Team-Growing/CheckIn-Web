import AbsenceRepositoryImpl from "@/repositories/AbsenceRepository/AbsenceRepositoryImpl";
import { CheckInQueryKey } from "@checkin/querykey";
import { useMutation, useQuery } from "react-query";

export const useApplyAbsenceMutation = () => {
  const mutation = useMutation(AbsenceRepositoryImpl.applyAbsence);
  return mutation;
};

export const useGetMyAbsenceQuery = () =>
  useQuery(
    CheckInQueryKey.absence.getMy,
    () => AbsenceRepositoryImpl.getMyAbsence(),
    {
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
    }
  );
