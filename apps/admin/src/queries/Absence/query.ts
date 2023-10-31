import AbsenceRepositoryImpl from "@/repositories/AbsenceRepository/AbsenceRepositoryImpl";
import { CheckInQueryKey } from "@checkin/querykey";
import { useQuery } from "react-query";

export const useGetAbsencesQuery = (date: string) =>
  useQuery(
    CheckInQueryKey.absence.getAll,
    () => AbsenceRepositoryImpl.getAbsences(date),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );
