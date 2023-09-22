import AuthRepositoryImpl from "@/repositories/AuthRepository/AuthRepositoryImpl";
import { useMutation } from "react-query";

export const usePostLoginMutation = () => {
  const mutation = useMutation(AuthRepositoryImpl.login);
  return mutation;
};
