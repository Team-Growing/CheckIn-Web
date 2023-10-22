import { TitleText } from "@checkin/ui";
import * as S from "./style";
import { DeleteIcon } from "@checkin/icon";
import useDeleteNotice from "@/hooks/Notice/useDeleteNotice";
import { useGetAllNoticeQuery } from "@/queries/Notice/query";

const NoticeList = () => {
  const { onDeleteNotice } = useDeleteNotice();
  const { data } = useGetAllNoticeQuery();
  return (
    <S.NoticeListContainer>
      <TitleText>NoticeList</TitleText>
      {data?.data.map((data) => (
        <S.NoticeWrap key={`${data.noticeId}`}>
          <S.NoticeText>{data.content}</S.NoticeText>
          <DeleteIcon
            onClick={() => onDeleteNotice(String(data.noticeId.value))}
          />
        </S.NoticeWrap>
      ))}
    </S.NoticeListContainer>
  );
};

export default NoticeList;
