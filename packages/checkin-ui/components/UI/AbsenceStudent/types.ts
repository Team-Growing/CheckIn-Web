import { ReactNode } from "react";

export interface AbsenseStudentBox {
  name: string;
  grade: string;
  room: string;
  number: string;
  reason: string;
  children: ReactNode;
}
