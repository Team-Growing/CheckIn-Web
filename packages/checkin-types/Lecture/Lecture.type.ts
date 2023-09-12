export type LectureStatusType =
  | "WAITING_PERIOD"
  | "ENROLMENT"
  | "COURSE_PERIOD"
  | "TERMINATION";

export type LectureTagType = "SPORTS" | "INSTRUMENT" | "AUTONOMY" | "NARSHA";

export type PlaceType =
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

export interface Lectures {
  explanation: string;
  placeType: string;
  acceptableStudent: {
    maxStudent: string;
    minStudent: string;
    targetGrade: string;
  };
  lectureSchedule: {
    startDay: string;
    endDay: string;
    dayOfWeek: string;
    startTime: string;
    endTime: string;
  };
}

export interface LectureResponse extends Response {
  data: {
    lectureId: {
      value: number;
    };
    explanation: string;
    lectureStatus: LectureStatusType;
    placeType: PlaceType;
    lectureTag: LectureTagType;
    acceptableStudent: {
      maxStudent: number;
      minStudent: number;
      targetGrade: number;
    };
    lectureTeacher: {
      memberId: {
        value: number;
      };
      name: string;
    };
    lectureSchedule: {
      startDay: string;
      endDay: string;
      dayOfWeek: DayOfWeekType;
    };
    enrollStudent: 0;
    weekPlans: [
      {
        week: 0;
        introduction: string;
      }
    ];
    participants: [
      {
        applyDateTime: string;
        memberId: {
          value: string;
        };
      }
    ];
  };
}
