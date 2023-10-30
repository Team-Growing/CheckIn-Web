import { Response } from "../util/response";
export interface AttendanceList {
  attendStudentCnt: number;
  attendants: [
    {
      id: string;
      name: string;
      studentInfo: {
        grade: number;
        room: number;
        number: number;
      };
    }
  ];
  nonAttendants: [
    {
      id: string;
      name: string;
      studentInfo: {
        grade: number;
        room: number;
        number: number;
      };
    }
  ];
}

export interface AttendanceListResponse {
  data: AttendanceList;
}

export interface AttendanceCode extends Response {
  data: {
    code: string;
  };
}

export interface AttendanceCodeResponse {
  lectureId: number;
}
