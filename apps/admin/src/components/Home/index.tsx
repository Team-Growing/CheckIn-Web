import React from "react";
import * as S from "./style";
import TodayLectures from "./TodayLectures";
import Notifiction from "./Notifiction";
import { Flex } from "@checkin/ui";
import Applyout from "./Applyout";
import Enrol from "./Enrol";

const Home = () => {
  return (
    <S.HomeContainer>
      <TodayLectures />
      <Notifiction />
      <Flex
        customStyle={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
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
