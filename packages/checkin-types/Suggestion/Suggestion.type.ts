import { DayOfWeekType } from "../Lecture/Lecture.type";

export interface SuggestonType {
  name: string;
  content: string;
  dayOfWeek: DayOfWeekType | string;
  additional: string;
}

export interface SuggestionResponse {
  data: {
    totalCount: number;
    value: [
      {
        suggestionId: {
          value: number;
        };
        name: string;
        content: string;
        dayOfWeek: DayOfWeekType | string;
        additional: string;
        createdAt: string;
        suggester: {
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

export interface Suggestion {
  data: {
    suggestionId: {
      value: number;
    };
    name: string;
    content: string;
    dayOfWeek: DayOfWeekType | string;
    additional: string;
    createdAt: string;
    suggester: {
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
  };
}
