// export interface AbsenceType
export interface AbsencesResponse {
  data: [
    {
      absenceId: {
        value: number;
      };
      absenceStatus: AbsenceStatus | string;
      reason: string;
      createdAt: string;
      lectureId: {
        value: number;
      };
      attendanceId: {
        value: number;
      };
      absentee: {
        memberId: {
          value: string;
        };
        name: string;
        studentInfo: {
          year: number;
          grade: number;
          room: number;
          number: number;
        };
      };
    }
  ];
}

export type AbsenceStatus =
  | "ABSENCE_PENDING"
  | "ABSENCE_ALLOWED"
  | "ABSENCE_DENIED";
