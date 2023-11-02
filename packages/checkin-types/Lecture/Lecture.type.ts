export type LectureStatusType =
  | "WAITING_PERIOD"
  | "ENROLMENT"
  | "COURSE_PERIOD"
  | "TERMINATION";

export type LectureTagType = "SPORTS" | "INSTRUMENT" | "AUTONOMY" | "NARSHA";

export type LecturePlaceType =
  | "PLAYGROUND"
  | "GYM"
  | "BASKETBALL_COURT"
  | "TENNIS_COURT";

export type DayOfWeekType =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";

export interface LecturesResponse extends Response {
  data: LectureType[];
}

export interface LecturesAllResponse extends Response {
  data: {
    waitingPeriod: LectureTagType[];
    enrolment: LectureTagType[];
    coursePeriod: LectureTagType[];
    termination: LectureTagType[];
  };
}

export interface LectureType {
  lectureId: {
    value: number;
  };
  lectureName: string;
  explanation: string;
  lectureStatus: LectureStatusType;
  placeType: LecturePlaceType;
  lectureTag: LectureTagType;
  acceptableStudent: {
    maxStudent: number;
    minStudent: number;
    targetGrade: number;
  };
  lectureTeacher: {
    teacherId: {
      value: string;
    };
    name: string;
  };
  lectureSchedule: {
    startDay: string;
    endDay: string;
    dayOfWeek: string[];
  };
  enrollStudent: number;
  weekPlans: [
    {
      week: number;
      introduction: string;
    }
  ];
  participants: [
    {
      applyDateTime: string;
      participantId: {
        value: string;
      };
    }
  ];
}

export interface Lectures {
  lectureName: string;
  explanation: string;
  placeType: string;
  lectureTag: LectureTagType | string;
  teacherId: string;
  acceptableStudent: LectureAcceptableStudent;
  lectureSchedule: LectureSchedule;
}
export interface LectureInfo {
  lectureName: string;
  explanation: string;
  placeType: string;
  lectureTag: LectureTagType;
  teacherId: string;
}

export interface LectureAcceptableStudent {
  maxStudent: number;
  minStudent: number;
  targetGrade: number;
}

export interface LectureSchedule {
  startDay: string;
  endDay: string;
  dayOfWeek: string[];
  startTime: string;
  endTime: string;
}
