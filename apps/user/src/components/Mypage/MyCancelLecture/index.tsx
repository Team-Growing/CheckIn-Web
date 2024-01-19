import React from "react";
import { MyCancelLecturesContainer } from "./style";
import { useGetMyAbsenceQuery } from "@/queries/Absence/query";
import { CheckMyAbsense } from "@checkin/ui";

const MyCancelLectures = () => {
  const { data: myAbsenceData } = useGetMyAbsenceQuery({ suspense: true });

  return (
    <MyCancelLecturesContainer>
      {myAbsenceData?.data.absences[0] === undefined && <span>없다</span>}
      {myAbsenceData?.data.absences.map((data) => (
        <CheckMyAbsense
          key={data.absenceId.value}
          grade={myAbsenceData.data.info.studentInfo.grade}
          isCheck={data.absenceStatus === "ABSENCE_PENDING" ? false : true}
          name={myAbsenceData.data.info.name}
          number={myAbsenceData.data.info.studentInfo.number}
          reason={data.reason}
          room={myAbsenceData.data.info.studentInfo.room}
        />
      ))}
    </MyCancelLecturesContainer>
  );
};

export default MyCancelLectures;
