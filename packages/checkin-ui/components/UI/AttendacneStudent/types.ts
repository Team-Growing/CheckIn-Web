import { ReactNode } from "react";

export interface AttendStudentProps {
  name: string;
  grade: number;
  room: number;
  number: number;
  children: ReactNode;
}
