import * as S from "./style";
import { DeleteIcon } from "@checkin/icon";
import useDeleteNotice from "@/hooks/Notice/useDeleteNotice";
import { NoticeType } from "@checkin/types";
import { dateTransform } from "@checkin/util";
import Switch from "react-switch";
import usePatchNoticeStatus from "@/hooks/Notice/usePatchNoticeStatus";

interface Props {
  data: NoticeType;
}

const NoticeList = ({ data }: Props) => {
  const { onDeleteNotice } = useDeleteNotice();
  const { noticeStatus, onPatchNoticeStatus, setNoticeStatus } =
    usePatchNoticeStatus({
      id: data.noticeId.value,
      status: data.noticeStatus,
    });

  return (
    <S.NoticeWrap key={`${data.noticeId}`}>
      <S.NoticeText>{data.content}</S.NoticeText>
      <S.NoticeCreatedAt>
        {dateTransform.hyphen(data.createdAt)}
      </S.NoticeCreatedAt>
      <Switch checked={noticeStatus} onChange={onPatchNoticeStatus} />
      <DeleteIcon onClick={() => onDeleteNotice(String(data.noticeId.value))} />
    </S.NoticeWrap>
  );
};

export default NoticeList;
