import React from "react";
import * as S from "./style";
import { Flex } from "@checkin/ui";
import TodayLectures from "./TodayLectures";
import Notifiction from "./Notifiction";
import Enrol from "./Enrol";
import Absence from "./Absence";

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
        <Absence />
        <Enrol />
      </Flex>
    </S.HomeContainer>
  );
};

export default Home;
