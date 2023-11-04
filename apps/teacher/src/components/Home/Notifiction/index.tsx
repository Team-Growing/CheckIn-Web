import { CardTitle } from "@checkin/ui";
import React, { useState } from "react";
import { NotifictionIcon } from "@checkin/icon";
import { useGetActiveNoticeQuery } from "@/queries/Notice/query";
import { NoticeContainer, NoticeContent } from "./style";

const Notifiction = () => {
  const { data } = useGetActiveNoticeQuery();
  const [noticeLength, setNoticeLength] = useState(data?.data.length! - 1);

  setTimeout(() => {
    if (noticeLength !== 0) {
      setNoticeLength(noticeLength - 1);
    } else {
      setNoticeLength(data?.data.length! - 1);
    }
  }, 2000);
  return (
    <NoticeContainer>
      <CardTitle>
        <NotifictionIcon />
        공지사항
      </CardTitle>
      <NoticeContent>{data?.data[noticeLength]?.content}</NoticeContent>
      <p>{`${data?.data.length! - noticeLength}/${data?.data.length}`}</p>
    </NoticeContainer>
  );
};

export default Notifiction;
