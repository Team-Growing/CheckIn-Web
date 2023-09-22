import LectureRepositoryImpl from "@/repositories/LectureRepository/LectureRepositoryImpl";
import { useMutation } from "react-query";

export const useCreateLectureMutation = () => {
  const mutation = useMutation(LectureRepositoryImpl.postLecture);
  return mutation;
};
