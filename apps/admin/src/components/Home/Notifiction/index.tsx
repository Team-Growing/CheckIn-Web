import { Card, CardTitle } from "@checkin/ui";
import Image from "next/image";
import React from "react";
import NotifictionImg from "../../../assets/Icon/Notifiction.svg";
import { NotifictionIcon } from "@checkin/icon";
import { NoticeContainer, NoticeContent } from "./style";

const Notifiction = () => {
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
