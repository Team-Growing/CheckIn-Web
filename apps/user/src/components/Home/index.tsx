"use client";

import React from "react";
import * as S from "./style";
import { Card, CardTitle, Flex } from "@checkin/ui";
import TodayLectures from "./TodayLectures";
import Notifiction from "./Notifiction";
import Absence from "./Absence";
import Attend from "./Attend";
import { Suspense } from "@suspensive/react";
import { CalendarIcon, LectureIcon } from "@checkin/icon";
import Token from "@/libs/token/Token";
import { ACCESS_TOKEN_KEY } from "@/constant/Token/Token.constant";

const Home = () => {
  return (
    <S.HomeContainer>
      <Card type="Lecture">
        <CardTitle>
          <LectureIcon />
          오늘의 방과후
        </CardTitle>
        <Suspense
          fallback={<span style={{ backgroundColor: "red" }}>loading...</span>}
        >
          <TodayLectures />
        </Suspense>
      </Card>

      <Suspense
        fallback={<span style={{ backgroundColor: "red" }}>loading</span>}
      >
        <Notifiction />
      </Suspense>
      <Flex
        customStyle={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        gap={20}
      >
        <Absence />
        <Attend />
      </Flex>
    </S.HomeContainer>
  );
};

export default Home;
