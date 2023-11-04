import { CardTitle } from "@checkin/ui";
import React, { useMemo } from "react";
import { NotifictionIcon } from "@checkin/icon";
import { useGetActiveNoticeQuery } from "@/queries/Notice/query";
import { NoticeContainer, NoticeContent } from "./style";

const Notifiction = () => {
  const { data } = useGetActiveNoticeQuery();

  return (
    <NoticeContainer>
      <CardTitle>
        <NotifictionIcon />
        공지사항
      </CardTitle>
      <NoticeContent>
        {"오늘 테니스 방과후는 방과후 강사님 사정으로 휴강합니다!"}
      </NoticeContent>
    </NoticeContainer>
  );
};

export default Notifiction;
