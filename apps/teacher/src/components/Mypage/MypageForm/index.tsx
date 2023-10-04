import React from "react";
import * as S from "./style";
import {
  Flex,
  Input,
  InputIntroText,
  InputWrap,
  WriteButton,
} from "@checkin/ui";
import { PhotoIcon } from "@checkin/icon";

const MypageForm = () => {
  return (
    <S.MypageFormContainer>
      <input id="profileUploadInput" type="file" />
      <S.MypageImageBox htmlFor="profileUploadInput">
        <PhotoIcon />
        사진을 입력해주세요
      </S.MypageImageBox>
      <Flex direction="column" gap={13}>
        <Flex gap={30}>
          <InputWrap>
            <InputIntroText>이름</InputIntroText>
            <Input customStyle={{ width: "80px" }} value="김예림" />
          </InputWrap>
          <InputWrap>
            <InputIntroText>이름</InputIntroText>
            <Input customStyle={{ width: "210px" }} />
          </InputWrap>
        </Flex>
        <Flex gap={30}>
          <InputWrap>
            <InputIntroText>학번</InputIntroText>
            <Input customStyle={{ width: "80px" }} value="김예림" />
          </InputWrap>
          <InputWrap>
            <InputIntroText>이름</InputIntroText>
            <Input customStyle={{ width: "123px" }} />
          </InputWrap>
          <WriteButton type="primary" style={{ marginTop: "20px" }}>
            수정하기
          </WriteButton>
        </Flex>
      </Flex>
    </S.MypageFormContainer>
  );
};

export default MypageForm;
