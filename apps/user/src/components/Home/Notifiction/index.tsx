import { Card, CardTitle, Flex } from "@checkin/ui";
import React, { useMemo } from "react";
import { NotifictionIcon } from "@checkin/icon";
import { useGetActiveNoticeQuery } from "@/queries/Notice/query";
import Slider from "react-slick";
import { NoticeContainer, NoticeContent } from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Notifiction = () => {
  const { data } = useGetActiveNoticeQuery();

  const noticeSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
  };

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
