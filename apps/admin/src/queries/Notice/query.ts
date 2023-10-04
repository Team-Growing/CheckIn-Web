import NoticeRepositoryImpl from "@/repositories/NoticeRepository/NoticeRepositoryImpl";
import { useMutation, useQuery } from "react-query";

export const useWriteNoticeMutation = () => {
  const mutation = useMutation(NoticeRepositoryImpl.writeNotice);
  return mutation;
};

export const useDeleteNoticeMutation = () => {
  const mutation = useMutation(NoticeRepositoryImpl.deleteNotice);
  return mutation;
};

export const usePatchNoticeStatusMutation = () => {
  const mutation = useMutation(NoticeRepositoryImpl.patchNoticeStatus);
  return mutation;
};

export const useGetAllNoticeQuery = () =>
  useQuery("notice/allNotice", () => NoticeRepositoryImpl.getAllNotice(), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });

export const useGetActiveNoticeQuery = () =>
  useQuery(
    "notice/activeNotice",
    () => NoticeRepositoryImpl.getActiveNotice(),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );
