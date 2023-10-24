import AbsenceRepositoryImpl from "@/repositories/AbsenceRepository/AbsenceRepositoryImpl";
import { useMutation } from "react-query";

export const useApplyAbsenceMutation = () => {
  const mutation = useMutation(AbsenceRepositoryImpl.applyAbsence);
  return mutation;
};
