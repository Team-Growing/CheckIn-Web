import React from "react";
import * as S from "./style";
import { Button, Flex, TextInput, TitleText } from "@checkin/ui";
import NoticeList from "./NoticeList";
import useWriteNotice from "@/hooks/Notice/useWriteNotice";
import { useGetAllNoticeQuery } from "@/queries/Notice/query";

const NoticeGenerate = () => {
  const { notice, onChangeNoticeData, onSubmitNoticeData } = useWriteNotice();
  const { data } = useGetAllNoticeQuery();
  return (
    <S.NoticeGenerateContainer>
      <Flex gap={30}>
        <TextInput
          value={notice}
          onChange={onChangeNoticeData}
          placeholder="공지 사항을 입력해주세요"
          customStyle={{ width: "85%", height: "50px" }}
        />
        <Button type="primary" onClick={onSubmitNoticeData}>
          공지 생성
        </Button>
      </Flex>
      <S.NoticeListContainer>
        <TitleText>NoticeList</TitleText>
        {data?.data.map((data) => (
          <NoticeList data={data} />
        ))}
      </S.NoticeListContainer>
    </S.NoticeGenerateContainer>
  );
};

export default NoticeGenerate;
