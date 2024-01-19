import { MemberInfoData } from "../Member/Member.type";

// export interface AbsenceType
export interface AbsencesResponse {
  data: [
    {
      absenceId: {
        value: number;
      };
      absenceStatus: AbsenceStatus;
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

export interface MemberAbsencesResponse {
  data: {
    info: MemberInfoData;
    absences: [
      {
        absenceId: {
          value: number;
        };
        absenceStatus: AbsenceStatus;
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
  };
}

export type AbsenceStatus =
  | "ABSENCE_PENDING"
  | "ABSENCE_ALLOWED"
  | "ABSENCE_DENIED";
