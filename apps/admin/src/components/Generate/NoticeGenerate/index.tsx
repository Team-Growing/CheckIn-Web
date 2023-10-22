import React from "react";
import * as S from "./style";
import { Button, Flex, TextInput } from "@checkin/ui";
import NoticeList from "./NoticeList";
import useWriteNotice from "@/hooks/Notice/useWriteNotice";

const NoticeGenerate = () => {
  const { notice, onChangeNoticeData, onSubmitNoticeData } = useWriteNotice();
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
      <NoticeList />
    </S.NoticeGenerateContainer>
  );
};

export default NoticeGenerate;
