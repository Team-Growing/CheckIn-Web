import { useDeleteNoticeMutation } from "@/queries/Notice/query";
import { CheckInQueryKey } from "@checkin/querykey";
import { CheckinToast } from "@checkin/toast";
import { useQueryClient } from "react-query";

const useDeleteNotice = () => {
  const queryClient = useQueryClient();

  const deleteNoticeMutation = useDeleteNoticeMutation();

  const onDeleteNotice = (id: string) => {
    const confirm = window.confirm("공지를 삭제하시겠습니까");
    if (confirm) {
      deleteNoticeMutation.mutate(id, {
        onSuccess: () => {
          CheckinToast.showSuccess("공지가 삭제되었습니다.");
          queryClient.invalidateQueries(CheckInQueryKey.notice.getAll);
        },
        onError: () => {
          CheckinToast.showError("error...");
        },
      });
    }
  };

  return { onDeleteNotice };
};

export default useDeleteNotice;
