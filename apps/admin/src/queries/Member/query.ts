import { UseQueryOptions, useQuery } from "react-query";
import { QueryKey } from "../queryKey";
import { CheckinToast } from "@checkin/toast";
import { AxiosError } from "axios";
import { MemberType } from "@checkin/types";
import Token from "@/libs/Token/Token";
import MemberRepositoryImpl from "@/repositories/MemberRepository/MemberRepositoryImpl";

export const useGetMemberInfo = (
  options?: UseQueryOptions<MemberType, AxiosError, MemberType, string>
) =>
  useQuery(QueryKey.member.getMy, () => MemberRepositoryImpl.getMemberInfo(), {
    cacheTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 5,
    onError: () => {
      CheckinToast.showError("토근이 위조되었습니다");
      Token.clearToken();
      window.location.href = "/sign";
    },
    ...options,
  });