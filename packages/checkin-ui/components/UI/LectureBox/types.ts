import { LectureTagType } from "@checkin/types";
import { CSSObject } from "styled-components";

export interface LectureBoxProps {
  title: string;
  grade: string;
  place: string;
  teacher: string;
  people: string;
  lectureTag: LectureTagType | string;
}

export interface EnrolLectureBoxProps {
  title: string;
  grade: string;
  place: string;
  people: string;
}

export interface LectureTagBoxProps extends LectureBoxProps {
  type: "absence" | "Enrol";
  customStyle?: CSSObject;
}
