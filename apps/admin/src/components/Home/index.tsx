import React from "react";
import * as S from "./style";
import TodayLectures from "./TodayLectures";
import Notifiction from "./Notifiction";
import { Flex } from "@checkin/ui";
import AbsenceList from "./Absence";
import Contact from "./Contact";

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
        <Contact />
        <AbsenceList />
      </Flex>
    </S.HomeContainer>
  );
};

export default Home;
