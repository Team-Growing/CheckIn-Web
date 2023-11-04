import { CardTitle } from "@checkin/ui";
import React from "react";
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
      {data?.data.map((data) => {
        return (
          <NoticeContent key={data.noticeId.value}>
            {data.content}
          </NoticeContent>
        );
      })}
    </NoticeContainer>
  );
};

export default Notifiction;
