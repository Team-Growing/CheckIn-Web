import { useDeleteNoticeMutation } from "@/queries/Notice/query";
import { CheckinToast } from "@checkin/toast";
import { useQueryClient } from "react-query";

const useDeleteNotice = () => {
  const queryClient = useQueryClient();

  const deleteNoticeMutation = useDeleteNoticeMutation();

  const onDeleteNotice = (id: string) => {
    deleteNoticeMutation.mutate(id, {
      onSuccess: () => {
        CheckinToast.showSuccess("공지 삭제 성공");
        queryClient.invalidateQueries("notice/allNotice");
      },
      onError: () => {
        CheckinToast.showError("공지 삭제 실패");
      },
    });
  };
  return { onDeleteNotice };
};

export default useDeleteNotice;
