import { DayOfWeekType } from "../Lecture/Lecture.type";
import { Response } from "../util/response";

export interface SuggestonType {
  name: string;
  content: string;
  dayOfWeek: DayOfWeekType | string;
  additional: string;
}

export interface SuggestionResponse extends SuggestonType, Response {
  suggestionId: {
    value: number;
  };
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
