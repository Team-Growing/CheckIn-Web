import React from "react";
import * as S from "./style";
import { Flex, TextInputWrap, WriteButton } from "@checkin/ui";
import { PhotoIcon } from "@checkin/icon";
import { MemberType } from "@checkin/types";
import { useGetMemberInfo } from "@/queries/Member/Member.query";

const MypageForm = () => {
  const { data } = useGetMemberInfo({ suspense: true });
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
            customStyle={{ width: "80px" }}
            value={data?.data.name}
            require={false}
          />
          <TextInputWrap
            info="E-mail"
            customStyle={{ width: "auto" }}
            value={data?.data.email}
            require={false}
          />
        </Flex>
        <Flex gap={30}>
          <TextInputWrap
            info="학번"
            customStyle={{ width: "80px" }}
            value={`${data?.data.studentInfo.grade}${data?.data.studentInfo.room}${data?.data.studentInfo.number}`}
            require={false}
          />
          <TextInputWrap
            info="아이디"
            customStyle={{ width: "auto" }}
            value={data?.data.id}
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
