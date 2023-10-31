import { ReactNode } from "react";

export interface AbsenseStudentBox {
  name: string;
  grade: number;
  room: number;
  number: number;
  reason: string;
  children: ReactNode;
}

export interface CheckAbsenseProps extends Omit<AbsenseStudentBox, "children"> {
  isCheck: boolean;
}
