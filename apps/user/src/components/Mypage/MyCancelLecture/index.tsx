import React from "react";
import { MyCancelLecturesContainer } from "./style";
import { useGetMyAbsenceQuery } from "@/queries/Absence/query";
import { CheckMyAbsense } from "@checkin/ui";

interface Props {
  grade: number;
  number: number;
  room: number;
  name: string;
}

const MyCancelLectures = ({ grade, name, number, room }: Props) => {
  const { data: myAbsenceData } = useGetMyAbsenceQuery();
  return (
    <MyCancelLecturesContainer>
      {myAbsenceData?.data.map((data) => (
        <CheckMyAbsense
          key={data.absenceId.value}
          grade={grade}
          isCheck={data.absenceStatus === "ABSENCE_PENDING" ? false : true}
          name={name}
          number={number}
          reason={data.reason}
          room={room}
        />
      ))}
    </MyCancelLecturesContainer>
  );
};

export default MyCancelLectures;
