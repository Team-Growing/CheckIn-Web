import React from "react";
import * as S from "./style";
import {
  Flex,
  InputIntroText,
  TextInput,
  TextInputWrap,
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
          <TextInputWrap info="이름" require={false} />
          <TextInputWrap info="아이디" require={false} />
        </Flex>
        <Flex gap={30}>
          <TextInputWrap info="E-mail" require={false} />
          <TextInputWrap info="전담과목" require={false} />
          <WriteButton type="primary" customStyle={{ marginTop: "20px" }}>
            수정하기
          </WriteButton>
        </Flex>
      </Flex>
    </S.MypageFormContainer>
  );
};

export default MypageForm;
