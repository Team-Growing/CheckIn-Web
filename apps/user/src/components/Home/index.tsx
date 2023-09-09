import React from "react";
import * as S from "./stlye";
import { Flex } from "@checkin/ui";
import TodayLectures from "./TodayLectures";
import Applyout from "./Applyout";
import Notifiction from "./Notifiction";
import useTokenCheck from "@/hooks/Auth/useTokenCheck";
import Enrol from "./Enrol";

const Home = () => {
  useTokenCheck();
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
