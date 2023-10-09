import EnrolRepositoryImpl from "@/repositories/EnrolRepository/EnrolRepositoryImpl";
import { useMutation } from "react-query";

export const useEnrolLectureByIdMutation = () => {
  const mutation = useMutation(EnrolRepositoryImpl.enrolLectureById);
  return mutation;
};
