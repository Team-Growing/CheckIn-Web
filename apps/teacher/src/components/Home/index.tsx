import React from "react";
import * as S from "./stlye";
import { Flex } from "@checkin/ui";
import TodayLectures from "./TodayLectures";
import Notifiction from "./Notifiction";

const Home = () => {
  return (
    <S.HomeContainer>
      <TodayLectures />
      <Notifiction></Notifiction>
    </S.HomeContainer>
  );
};

export default Home;
