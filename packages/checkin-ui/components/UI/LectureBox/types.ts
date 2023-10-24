import { LectureTagType } from "@checkin/types";
import { CSSObject } from "styled-components";

export interface LectureBoxProps {
  title: string;
  grade: number;
  place: string;
  teacher: string;
  people: number;
  lectureTag: LectureTagType | string;
}

export interface EnrolLectureBoxProps {
  title: string;
  grade: string;
  place: string;
  people: string;
  lectureTag: LectureTagType | string;
  onClick: () => void;
  isSelect: boolean;
}

export interface LectureTagBoxProps extends LectureBoxProps {
  type: "absence" | "Enrol";
  customStyle?: CSSObject;
  isSelect?: boolean;
  onSelect?: () => void;
  onClick?: () => void;
}
