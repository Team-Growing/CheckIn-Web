import React from "react";
import * as S from "./style";
import { Flex, TextInputWrap, WriteButton } from "@checkin/ui";
import { PhotoIcon } from "@checkin/icon";
import { MemberType } from "@checkin/types";

interface Props {
  myInfoData: MemberType;
}

const MypageForm = ({ myInfoData }: Props) => {
  return (
    <S.MypageFormContainer>
      <input id="profileUploadInput" type="file" />
      <S.MypageImageBox htmlFor="profileUploadInput">
        <PhotoIcon />
        사진을 입력해주세요
      </S.MypageImageBox>
      <Flex direction="column" gap={13}>
        <Flex gap={30}>
          <TextInputWrap
            info="이름"
            customStyle={{ width: "100px" }}
            value={myInfoData.data.name}
            require={false}
          />
          <TextInputWrap
            info="E-mail"
            customStyle={{ width: "auto" }}
            value={myInfoData.data.email}
            require={false}
          />
        </Flex>
        <Flex gap={30}>
          <TextInputWrap
            info="담당과목"
            customStyle={{ width: "100px" }}
            value={myInfoData.data.memberRole}
            require={false}
          />
          <TextInputWrap
            info="아이디"
            customStyle={{ width: "auto" }}
            value={myInfoData.data.id}
            require={false}
          />
          <WriteButton type="primary" customStyle={{ marginTop: "20px" }}>
            수정하기
          </WriteButton>
        </Flex>
      </Flex>
    </S.MypageFormContainer>
  );
};

export default MypageForm;
