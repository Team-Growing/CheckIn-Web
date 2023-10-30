import React from "react";
import * as S from "./stlye";
import { Flex } from "@checkin/ui";
import TodayLectures from "./TodayLectures";
import Notifiction from "./Notifiction";
import Applyout from "./Question";
import Enrol from "./Attendance";

const Home = () => {
  return (
    <S.HomeContainer>
      <TodayLectures />
      <Notifiction />
      <Flex
        justify="center"
        customStyle={{
          width: "100%",
        }}
        gap={20}
      >
        <Applyout />
        <Enrol />
      </Flex>
    </S.HomeContainer>
  );
};

export default Home;
