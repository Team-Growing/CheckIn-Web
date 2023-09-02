import React from "react";
import * as S from "./stlye";
import { Flex } from "@checkin/ui";
import TodayClasses from "./TodayClasses";
import Applyout from "./Applyout";
import Calendar from "./Calendar";
import Notifiction from "./Notifiction";
import useTokenCheck from "@/hooks/Auth/useTokenCheck";

const Home = () => {
  useTokenCheck();
  return (
    <S.HomeContainer>
      <TodayClasses />
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
        <Calendar />
      </Flex>
    </S.HomeContainer>
  );
};

export default Home;
